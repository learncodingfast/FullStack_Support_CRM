import React from 'react'

const StatusFilter = ({status, setStatus}) => {
  return (
    <div className="w-100">
  <select
    value={status}
    onChange={(e) => setStatus(e.target.value)}
    className="form-select p-3 rounded-3 border-success shadow-sm"
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
