import React from 'react'

const StatusBadge = () => {
   let color = "bg-gray-500";

  if (status === "Open") {
    color = "bg-green-500";
  }

  if (status === "In Progress") {
    color = "bg-yellow-500";
  }

  if (status === "Closed") {
    color = "bg-red-500";
  }
 
    return (
    <div>
       <span
      className={`${color} text-white text-sm px-3 py-1 rounded-full`}
    >
      {status}
    </span>
    </div>
  )
}

export default StatusBadge
