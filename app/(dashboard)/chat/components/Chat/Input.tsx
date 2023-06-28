import Button from "@/lib/components/ui/Button";
import { FC } from "react";

interface InputProps {}

const Input: FC<InputProps> = ({}) => {
  return (
    <form className="flex gap-4 my-10">
      <input
        className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded outline-none focus:ring-1 ring-zinc-500"
        type="text"
        name="question"
        id="question"
        autoFocus
      />
      <Button type="submit">Send</Button>
    </form>
  );
};

export default Input;
