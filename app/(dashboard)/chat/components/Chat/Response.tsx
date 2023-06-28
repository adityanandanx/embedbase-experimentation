import embedbase from "@/lib/embedbase";
import { FC } from "react";

interface ResponseProps {
  question?: string;
}

const Response: FC<ResponseProps> = async ({ question }) => {
  if (!question) return null;
  const data = await embedbase.dataset("brain-1").createContext("my-context");

  const prompt = `Based on the following context:\n${data.join(
    "\n"
  )}\nAnswer the user's question: ${question}`;

  const res = await embedbase
    .useModel("openai/gpt-3.5-turbo-16k")
    .generateText(prompt);

  return <p>{res}</p>;
};

export default Response;
