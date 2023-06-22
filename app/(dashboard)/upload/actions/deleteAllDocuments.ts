"use server";

import embedbase from "@/lib/embedbase";
import { revalidatePath } from "next/cache";

const deleteAllDocuments = async () => {
  console.log("Deleting all documents...");
  await embedbase.dataset("brain-1").clear();
  console.log("Deleted all documents.");
  revalidatePath("/upload");
};
export default deleteAllDocuments;
