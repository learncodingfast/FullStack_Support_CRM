import React from "react";
import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

const TicketRow = ({ ticket }) => {
  return (
    <tr>
      <td className="p-3">
        <Link
          to={`/tickets/${ticket.ticket_id}`}
          className="text-primary text-decoration-none"
        >
          {ticket.ticket_id}
        </Link>
      </td>

      <td className="p-3">
        {ticket.customer_name}
      </td>

      <td className="p-3">
        {ticket.subject}
      </td>

      <td className="p-3">
        <StatusBadge status={ticket.status} />
      </td>

      <td className="p-3">
        {new Date(ticket.created_at).toLocaleDateString()}
      </td>
    </tr>
  );
};

export default TicketRow;