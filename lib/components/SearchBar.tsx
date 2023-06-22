import { FC } from "react";

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = ({}) => {
  return (
    <form
      className="flex flex-col sm:flex-row gap-0 sm:gap-5 items-center justify-center my-5 px-10 max-w-3xl mx-auto"
      action="/search"
    >
      <label className="" htmlFor="q">
        Search in your dataset:{" "}
      </label>
      <input
        className="border max-w-full flex-1 border-black/10 dark:border-white/25 rounded-md px-4 py-2 bg-gray-50 dark:bg-gray-900"
        type="text"
        name="q"
        id="q"
      />
    </form>
  );
};

export default SearchBar;
