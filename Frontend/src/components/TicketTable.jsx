import TicketRow from "./TicketRow";

function TicketTable({ tickets }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Ticket ID</th>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Subject</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Created</th>
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
              <td
                colSpan="5"
                className="text-center p-6 text-gray-500"
              >
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