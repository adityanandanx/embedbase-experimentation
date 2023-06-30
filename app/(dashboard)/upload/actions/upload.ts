"use server";

import embedbase from "@/lib/embedbase";
import { revalidatePath } from "next/cache";
import { BatchAddDocument, splitText } from "embedbase-js";
import parserInstance from "@/lib/axios/parserInstance";
import { SplitTextChunk } from "embedbase-js/dist/module/split/types";

const uploadFiles = async (data: FormData) => {
  console.log("uploading data...");
  const file = data.get("file") as File;

  if (!file) return;

  let text: string | null = null;
  let documents: BatchAddDocument[] = [];

  try {
    const parserRes = await parserInstance.post(`parse?split=${true}`, data);
    const chunks: SplitTextChunk[] = parserRes.data.chunks;
    documents = chunks.map((chunk) => {
      return {
        data: chunk.chunk,
        metadata: { path: file.name, start: chunk.start, end: chunk.end },
      };
    });
    console.log(documents.length);
  } catch (error) {
    console.error(error);
  }
  if (!text && documents.length === 0)
    throw new Error("No text returned by the parsing backend.");

  // const chunks = splitText(text);
  // const documents: BatchAddDocument[] = await chunks.map(
  //   ({ chunk, start, end }) => {
  //     return {
  //       data: chunk,
  //       metadata: { path: file.name, chunk: [start, end] },
  //     };
  //   }
  // );

  // await chunks.forEach(async ({ chunk, start, end }) => {
  //   await embedbase
  //     .dataset("brain-1")
  //     .add(chunk, { path: file.name, chunk: [start, end] });
  //   console.log({ start, end });
  // });

  await embedbase.dataset("brain-1").batchAdd(documents);
  // .chunkAndBatchAdd([{ data: text, metadata: { path: file.name } }]);

  revalidatePath("/upload");
  console.log("upload complete");
};

export default uploadFiles;
