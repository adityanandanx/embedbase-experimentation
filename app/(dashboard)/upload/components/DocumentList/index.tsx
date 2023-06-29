import embedbase from "@/lib/embedbase";
import { FC } from "react";
import DocumentListItem from "./DocumentListItem";
import { deleteAllDocuments } from "../../actions";
import FormSubmitButton from "@/lib/components/ui/FormSubmitButton";
import { Document } from "embedbase-js";

interface DocumentListProps {}

const DocumentList: FC<DocumentListProps> = async ({}) => {
  const data = await embedbase.dataset("brain-1").list();
  const grouped: { [path: string]: Document[]; trash: Document[] } = {
    trash: [],
  };

  for (const doc of data) {
    const path = doc.metadata?.path;
    if (!path) {
      grouped.trash.push(doc);
      return;
    }
    if (grouped[path]) {
      grouped[path].push(doc);
    } else {
      grouped[path] = [doc];
    }
  }

  // const getGroupedData = (data: Document[]) => {
  //   const groupedData: Map<string, Document[]> = new Map();
  //   data.forEach((doc) => {
  //     if (!doc.metadata?.path) return;
  //     const name = doc.metadata.path;
  //     if (groupedData.has(name)) {
  //       groupedData.set(name, [...groupedData.get(name)!, doc]);
  //     }
  //   });
  //   return groupedData;
  // };

  return (
    <div className="flex flex-col w-full rounded-md">
      {/* {Object.keys(groupedData).map((key) => {
        const docsWithSameName = groupedData.get(key)!;
        console.log(docsWithSameName);

        return (
          <>
            {docsWithSameName.map((doc) => {
              return <DocumentListItem doc={doc} />;
            })}
          </>
        );
      })} */}

      {/* {Array.from(getGroupedData(data)).map(([path, docs]) => {
        return (
          <div className="bg-red-500 py-10">
            <h1>{path}</h1>
            {docs.map((doc) => (
              <DocumentListItem doc={doc} />
            ))}
          </div>
        );
      })} */}
      {/* {data.map((doc) => (
        <DocumentListItem key={doc.hash} doc={doc} />
      ))} */}

      {Object.keys(grouped).map((path) => {
        const group = grouped[path];
        if (!group || group.length === 0) return null;
        return (
          <div key={path} className="my-10 w-full flex flex-col">
            <h1 className="text-2xl truncate mb-2">{path}</h1>
            <div className="flex flex-col min-h-0 max-h-[256px] scrollbar">
              {group.map((doc) => {
                return <DocumentListItem key={doc.hash} doc={doc} />;
              })}
            </div>
          </div>
        );
      })}

      {data.length > 0 && (
        <form action={deleteAllDocuments}>
          <FormSubmitButton className="ml-auto" variant={"danger"}>
            Delete all
          </FormSubmitButton>
        </form>
      )}
    </div>
  );
};

export default DocumentList;
