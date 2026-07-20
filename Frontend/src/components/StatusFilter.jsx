import React from 'react'

const StatusFilter = (status, setStatus) => {
  return (
    <div>
       <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
    >
      <option value="">All Status</option>
      <option value="Open">Open</option>
      <option value="In Progress">In Progress</option>
      <option value="Closed">Closed</option>
    </select>
    </div>
  )
}

export default StatusFilter
