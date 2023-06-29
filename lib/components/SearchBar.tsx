import { FC } from "react";

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = ({}) => {
  return (
    <form
      className="flex flex-col sm:flex-row gap-0 sm:gap-5 items-center justify-center max-w-3xl mx-auto"
      action="/search"
    >
      <input
        className="input"
        placeholder="Search for something..."
        type="text"
        name="q"
        id="q"
      />
    </form>
  );
};

export default SearchBar;
