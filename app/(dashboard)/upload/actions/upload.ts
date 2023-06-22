// @ts-ignore
import pdf from "pdf-parse/lib/pdf-parse";
// import pdf from "pdf-parse";
import embedbase from "@/lib/embedbase";
import toBuffer from "../helpers/toBuffer";
import { revalidatePath } from "next/cache";
import { BatchAddDocument, splitText } from "embedbase-js";

const uploadFiles = async (data: FormData) => {
  console.log("uploading data...");
  const file = data.get("file") as File;

  if (!file) return;

  let text: string;

  switch (file.type as HTMLInputElement["accept"]) {
    case "application/pdf":
      const buf = toBuffer(await file.arrayBuffer());
      text = (await pdf(buf)).text;
      break;

    case "text/plain":
      text = await file.text();
      break;

    default:
      throw new Error(`${file.type} type not allowed.`);
  }

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
