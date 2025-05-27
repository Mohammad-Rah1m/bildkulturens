import React from "react";
import QuickSearch from "../shared/QuickSearch";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex gap-2 justify-between bg-gray-100 p-2 rounded-md">
      <QuickSearch />
      <div className="flex gap-2">
        <Link
          href="/search/simple-search"
          className="flex items-center gap-2 bg-white px-4 py-2 rounded hover:bg-blue-700 max-w-max border-gray-300 border text-sm"
        >
          Simple Search
        </Link>
        <Link
          href="/your-target-page"
          className="flex items-center gap-2 bg-white px-4 py-2 rounded hover:bg-blue-700 max-w-max border-gray-300 border text-sm"
        >
          Extended Search
        </Link>
        <Link
          href="/your-target-page"
          className="flex items-center gap-2 bg-white px-4 py-2 rounded hover:bg-blue-700 max-w-max border-gray-300 border text-sm"
        >
          Thesaurus Search
        </Link>
        <Link
          href="/your-target-page"
          className="flex items-center gap-2 bg-white px-4 py-2 rounded hover:bg-blue-700 max-w-max border-gray-300 border text-sm"
        >
          Index Search
        </Link>
      </div>
    </div>
  );
};

export default Header;
