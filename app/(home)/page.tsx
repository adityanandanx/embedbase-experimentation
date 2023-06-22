import SearchBar from "@/lib/components/SearchBar";
import Button from "@/lib/components/ui/Button";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="w-full gap-5 h-full min-h-screen flex flex-col items-center justify-center py-20">
      {/* <Link
        href={"/upload"}
        className="flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-center rounded-md h-fit p-10 w-full flex-1 max-w-md"
      >
        Upload
      </Link> */}
      {/* <Link
        href={"/search"}
        className="flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-center rounded-md h-fit p-10 w-full flex-1 max-w-md"
      >
        Search
      </Link> */}
      {/* <Link
        href={"/chat"}
        className="flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-center rounded-md h-fit p-10 w-full flex-1 max-w-md"
      >
        Chat
      </Link> */}

      <SearchBar />
      <div className="flex gap-5">
        <Link href={"/upload"}>
          <Button>Upload</Button>
        </Link>
        <Link href={"/chat"}>
          <Button>Chat</Button>
        </Link>
      </div>
    </main>
  );
}
