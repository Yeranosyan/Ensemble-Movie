"use client";

import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import Button from "./button";

const SearchBar = ({
  handleSearch,
}: {
  handleSearch: (title: string) => {};
}) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  const handleSearchClicked = async () => {
    try {
      handleSearch(title);
    } catch (error) {
      console.error("Error occurred during search:", error);
    }
  };

  return (
    <section className="mt-1">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
        <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
          Welcome to our Entertainment Movies
        </span>
      </h1>
      <div className="flex items-center justify-center mt-1 mb-6">
        <div className="text-xl bg-gradient-to-r from-red-500 to-red-700 text-transparent text-white rounded-full p-2">
          <IoIosSearch />
        </div>
        <div className="p-5 flex items-center">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <Button buttonText="Search" onClick={handleSearchClicked} />

        <div className="hidden sm:flex items-center">
          <div
            onClick={() => setOpen(!open)}
            className="ml-2 relative bg-red-500/90 w-2 h-2 cursor-pointer rounded-full animate-pulse"
          />
          {open && (
            <div className="border border-red-500 items-center justify-center rounded-2xl ml-5 whitespace-nowrap absolute">
              <p className="text-[10px] text-red-500 p-1 flex items-center gap-1 cursor-pointer font-bold">
                <FaRegBell />
                Subscribe
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
