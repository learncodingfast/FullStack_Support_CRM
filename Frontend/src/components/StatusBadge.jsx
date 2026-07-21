import React from 'react'

const StatusBadge = ({ status }) => {
  let color = "bg-secondary";

  if (status === "Open") {
    color = "bg-success";
  }

  if (status === "In Progress") {
    color = "bg-warning text-dark";
  }

  if (status === "Closed") {
    color = "bg-danger";
  }

  return (
    <span className={`${color} text-white small px-3 py-2 rounded-pill`}>
      {status}
    </span>
  )
}

export default StatusBadge