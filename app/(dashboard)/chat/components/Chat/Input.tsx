import Button from "@/lib/components/ui/Button";
import { FC } from "react";

interface InputProps {}

const Input: FC<InputProps> = ({}) => {
  return (
    <form className="flex gap-4 my-10">
      <input
        className="input"
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
