import Modal from "@/lib/components/ui/Modal";
import { Document } from "embedbase-js";
import { FC } from "react";

interface DocumentListItemProps {
  doc: Document;
}

const DocumentListItem: FC<DocumentListItemProps> = ({ doc }) => {
  return (
    <Modal
      title={doc.metadata?.path}
      desc="Document"
      Trigger={
        <button className="even:bg-black/5 dark:even:bg-white/10 flex items-center text-left hover:bg-black/10 dark:hover:bg-white/25 px-5 py-2 rounded-md">
          <div className="flex-1">
            <h1 className="text-sm">{doc.metadata?.path}</h1>
            <p className="text-xs opacity-50">{doc.id}</p>
          </div>
          {/* <p className="hidden sm:block text-xs opacity-50 font-mono">
            {doc.metadata?.chunk[0]} to {doc.metadata?.chunk[1]}
            {doc.metadata?.path}
          </p> */}
        </button>
      }
    >
      <div className="break-all overflow-auto font-mono leading-loose tracking-wide text-xs">
        {/* <pre>{JSON.stringify(doc.data, null, 2)}</pre> */}
        {doc.data}
      </div>
    </Modal>
  );
};

export default DocumentListItem;
