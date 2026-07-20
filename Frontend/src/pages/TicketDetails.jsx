import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import StatusBadge from "../components/StatusBadge";
import NoteList from "../components/NoteList";

import { getTicket, updateTicket } from "../services/api";

function TicketDetails() {
  const { ticketId } = useParams();
  const navigate = useNavigate();

  const [ticket, setTicket] = useState(null);

  const [status, setStatus] = useState("");

  const [note, setNote] = useState("");

  const [loading, setLoading] = useState(true);

  function loadTicket() {
    setLoading(true);

    getTicket(ticketId)
      .then((res) => {
        setTicket(res.data);
        setStatus(res.data.status);
      })
      .catch(() => {
        toast.error("Ticket not found");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    loadTicket();
  }, []);

  function handleSave() {
    setLoading(true);

    updateTicket(ticketId, {
      status,
      note_text: note || null,
    })
      .then(() => {
        toast.success("Ticket updated");
        navigate("/");
      })
      .catch(() => {
        toast.error("Update failed");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <Loader />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto mt-8 bg-white p-6 rounded-lg shadow">

        <h2 className="text-2xl font-bold mb-6">
          {ticket.ticket_id}
        </h2>

        <div className="space-y-3">

          <div>
            <strong>Customer</strong>
            <p>{ticket.customer_name}</p>
          </div>

          <div>
            <strong>Email</strong>
            <p>{ticket.customer_email}</p>
          </div>

          <div>
            <strong>Subject</strong>
            <p>{ticket.subject}</p>
          </div>

          <div>
            <strong>Description</strong>
            <p>{ticket.description}</p>
          </div>

          <div>
            <strong>Current Status</strong>

            <div className="mt-2">
              <StatusBadge status={ticket.status} />
            </div>
          </div>

          <div>

            <strong>Update Status</strong>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border rounded p-3 mt-2"
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Closed">Closed</option>
            </select>

          </div>

          <div>

            <strong>Add Note</strong>

            <textarea
              rows="4"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full border rounded p-3 mt-2"
            />

          </div>

          <div>

            <strong>Previous Notes</strong>

            <div className="mt-3">
              <NoteList notes={ticket.notes} />
            </div>

          </div>

          <div className="flex gap-3 pt-4">

            <button
              onClick={() => navigate("/")}
              className="bg-gray-500 text-white px-5 py-2 rounded"
            >
              Back
            </button>

            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-5 py-2 rounded"
            >
              Save Changes
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default TicketDetails;