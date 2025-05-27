import React from 'react'
import { FaSearch } from 'react-icons/fa';

const QuickSearch = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-4 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-900 dark:text-white dark:border-zinc-700"
      />
      <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </div>
  )
}

export default QuickSearch
