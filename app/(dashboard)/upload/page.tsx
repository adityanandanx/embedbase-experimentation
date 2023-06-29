import { FC, Suspense } from "react";
import FileUploader from "./components/FileUploader";
import DocumentList from "./components/DocumentList";
import Link from "next/link";
import Button from "@/lib/components/ui/Button";
import { MdChevronLeft } from "react-icons/md";

interface UploadPageProps {}

const UploadPage: FC<UploadPageProps> = ({}) => {
  return (
    <main className="w-full h-full max-w-3xl m-auto mt-10">
      <FileUploader />
      <Suspense fallback={<>Fetching your documents...</>}>
        <DocumentList />
      </Suspense>
    </main>
  );
};

export default UploadPage;
