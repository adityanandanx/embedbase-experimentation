import embedbase from "@/lib/embedbase";
import { FC } from "react";
import { redirect } from "next/navigation";
import SearchBar from "@/lib/components/SearchBar";

interface SearchPageProps {
  searchParams?: {
    q?: string;
  };
}

const SearchPage: FC<SearchPageProps> = async ({ searchParams }) => {
  const data = searchParams?.q
    ? await embedbase.dataset("brain-1").search(searchParams.q)
    : [];
  return (
    <main>
      <SearchBar />
      <div className="p-10 max-w-3xl w-full mx-auto">
        {data.map((searchData) => (
          <div key={searchData.hash} className="flex flex-col mb-10">
            {/* <h1 className="text-2xl font-bold">{searchData.metadata?.path}</h1> */}
            <span className="text-xs opacity-50">
              from: {searchData.metadata?.path}
            </span>
            <span className="break-all overflow-auto">{searchData.data}</span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default SearchPage;
