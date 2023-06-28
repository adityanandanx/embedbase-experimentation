"use server";

import embedbase from "@/lib/embedbase";
import { revalidatePath } from "next/cache";
import { BatchAddDocument, splitText } from "embedbase-js";
import parserInstance from "@/lib/axios/parserInstance";

const uploadFiles = async (data: FormData) => {
  console.log("uploading data...");
  const file = data.get("file") as File;

  if (!file) return;

  let text: string | null = null;
  try {
    const parserRes = await parserInstance.post("parse", data);
    text = parserRes.data.text;
  } catch (error) {
    console.error(error);
  }
  if (!text) throw new Error("BAD");

  const chunks = splitText(text);
  const documents: BatchAddDocument[] = await chunks.map(
    ({ chunk, start, end }) => {
      return {
        data: chunk,
        metadata: { path: file.name, chunk: [start, end] },
      };
    }
  );

  // await chunks.forEach(async ({ chunk, start, end }) => {
  //   await embedbase
  //     .dataset("brain-1")
  //     .add(chunk, { path: file.name, chunk: [start, end] });
  //   console.log({ start, end });
  // });

  await embedbase.dataset("brain-1").chunkAndBatchAdd(documents);

  revalidatePath("/upload");
  console.log("upload complete");
};

export default uploadFiles;
