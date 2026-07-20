import React from 'react'

const SearchBar = ({ search, setSearch }) => {
  return (
    <div>
      <input
      type="text"
      placeholder="Search tickets..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full md:w-80 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
    />
    </div>
  )
}

export default SearchBar
