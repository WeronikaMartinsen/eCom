import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    onSearch(value);
  };

  return (
    <div className="mb-3 md:w-96">
      <div className="flex flex-row text-center w-full bg-white rounded-xl shadow-sm">
        <MagnifyingGlassIcon className="h-4 w-4 mt-3 ml-2 mr-1 text-gray-500" />
        <input
          value={input}
          onChange={handleInputChange}
          type="search"
          className="bg-white h-10 border-none ml-1 text-md outline-none w-full rounded-xl"
          placeholder="Find you product..."
          aria-label="Search"
          aria-describedby="button-addon1"
        />
      </div>
    </div>
  );
};
export default SearchBar;
