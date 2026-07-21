import React from 'react'


const Pagination = ({ page, total, size, setPage }) => {

  const totalPages = Math.ceil(total / size);

  return (
   <div>
  <div className="d-flex justify-content-center align-items-center gap-3 mt-4">

    <button
      onClick={() => setPage(page - 1)}
      disabled={page === 1}
      className="btn btn-success px-4"
    >
      Previous
    </button>

    <span className="fw-medium">
      Page {page} of {totalPages || 1}
    </span>

    <button
      onClick={() => setPage(page + 1)}
      disabled={page === totalPages || totalPages === 0}
      className="btn btn-success px-4  "
    >
      Next
    </button>

  </div>
</div>
  )
}

export default Pagination