import React from 'react'

const SearchBar = ({ search, setSearch }) => {
  return (
   <div className="d-flex justify-content-end my-4">
  <input
    type="text"
    placeholder="Search tickets..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="
      form-control
      w-100
      p-3
      rounded-pill
      border-success
      shadow
      transition
    "
  />
</div>
  )
}

export default SearchBar
