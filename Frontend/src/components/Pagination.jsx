import React from 'react'

const Pagination = ({ page, total, size, setPage }) => {

  const totalPages = Math.ceil(total / size);

  return (
    <div>
      <div className="flex justify-center items-center gap-4 mt-6">

        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          Previous
        </button>

        <span>
          Page {page} of {totalPages || 1}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages || totalPages === 0}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          Next
        </button>

      </div>
    </div>
  )
}

export default Pagination