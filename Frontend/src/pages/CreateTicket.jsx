import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import { createTicket } from "../services/api";

function CreateTicket() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    customer_name: "",
    customer_email: "",
    subject: "",
    description: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (form.customer_name.length < 3) {
      toast.error("Customer name must be at least 3 characters");
      return;
    }

    if (form.subject.length < 5) {
      toast.error("Subject must be at least 5 characters");
      return;
    }

    if (form.description.length < 10) {
      toast.error("Description must be at least 10 characters");
      return;
    }

    setLoading(true);

    createTicket(form)
      .then(() => {
        toast.success("Ticket created successfully");
        navigate("/");
      })
      .catch(() => {
        toast.error("Failed to create ticket");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Navbar />

      <div className="max-w-2xl mx-auto mt-8 bg-white p-6 rounded-lg shadow">

        <h2 className="text-2xl font-bold mb-6">
          Create Support Ticket
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="customer_name"
            placeholder="Customer Name"
            value={form.customer_name}
            onChange={handleChange}
            className="w-full border rounded p-3"
          />

          <input
            type="email"
            name="customer_email"
            placeholder="Email"
            value={form.customer_email}
            onChange={handleChange}
            className="w-full border rounded p-3"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border rounded p-3"
          />

          <textarea
            rows="6"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded p-3"
          />

          <div className="flex gap-3">

            <button
              type="button"
              onClick={() => navigate("/")}
              className="bg-gray-500 text-white px-6 py-2 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-2 rounded"
            >
              {loading ? "Creating..." : "Create Ticket"}
            </button>

          </div>

        </form>

      </div>
    </>
  );
}

export default CreateTicket;