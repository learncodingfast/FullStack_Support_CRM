import React from 'react'

const TicketRow = () => {
  return (
    <div>
      <tr  className="border-b hover:bg-gray-50">
        <td className="p-3">
            <Link  to={`/tickets/${ticket.ticket_id}`}
          className="text-blue-600 hover:underline">
            </Link>
        </td>

        <td className="p-3">{ticket.customer_name}</td>
          <td className="p-3">{ticket.subject}</td>

      <td className="p-3">
        <StatusBadge status={ticket.status} />
      </td>

      <td className="p-3">
        {new Date(ticket.created_at).toLocaleDateString()}
      </td>
      </tr>
    </div>
  )
}

export default TicketRow
