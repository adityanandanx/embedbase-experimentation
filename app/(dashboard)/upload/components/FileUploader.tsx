import { FC } from "react";
import { uploadFiles } from "../actions";
import FormSubmitButton from "@/lib/components/ui/FormSubmitButton";

interface FileUploaderProps {}

const FileUploader: FC<FileUploaderProps> = ({}) => {
  return (
    <form className="flex flex-col w-full" action={uploadFiles}>
      <fieldset className="flex justify-between py-10 px-10 items-center border dark:border-white/25 border-black/10 rounded-md">
        <label htmlFor="file">Upload File</label>
        <input required className="text-sm" type="file" id="file" name="file" />
      </fieldset>
      <FormSubmitButton className="px-5 mt-5 self-end rounded-md w-fit py-2 bg-black text-white">
        Upload
      </FormSubmitButton>
    </form>
  );
};

export default FileUploader;
