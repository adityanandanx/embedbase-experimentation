import Button from "@/lib/components/ui/Button";
import { FC, Suspense, useState } from "react";
import { useRouter } from "next/navigation";
import Response from "./Response";
import Link from "next/link";
import Input from "./Input";

interface ChatProps {
  question?: string;
}

const Chat: FC<ChatProps> = ({ question }) => {
  return (
    <>
      <Input />
      <Suspense fallback={<>Thinking...</>}>
        <Response question={question} />
      </Suspense>
    </>
  );
};

export default Chat;
