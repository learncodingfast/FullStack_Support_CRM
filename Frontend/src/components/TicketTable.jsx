import TicketRow from "./TicketRow";

function TicketTable({ tickets }) {
  return (
    <div className="bg-white rounded shadow overflow-auto">
      <table className="table table-hover align-middle mb-0">
        <thead className="table-success">
          <tr>
            <th className="p-3">Ticket ID</th>
            <th className="p-3">Customer</th>
            <th className="p-3">Subject</th>
            <th className="p-3">Status</th>
            <th className="p-3">Created</th>
          </tr>
        </thead>

        <tbody>
          {tickets.length > 0 ? (
            tickets.map((ticket) => (
              <TicketRow
                key={ticket.ticket_id}
                ticket={ticket}
              />
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-5 text-secondary">
                No tickets found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TicketTable;