import { FC } from "react";
import Chat from "./components/Chat";

interface ChatPageProps {
  searchParams: {
    question: string;
  };
}

const ChatPage: FC<ChatPageProps> = ({ searchParams }) => {
  console.log(searchParams);

  return (
    <main className="w-full h-full max-w-3xl m-auto mt-10">
      <h1 className="text-4xl">Chat</h1>
      <h2 className="text-base">Chat with the documents you have uploaded</h2>
      <Chat question={searchParams.question} />
    </main>
  );
};

export default ChatPage;
