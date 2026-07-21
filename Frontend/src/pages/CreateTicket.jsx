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

      <div className="container mt-5">

        <div className="card shadow">

          <div className="card-body p-4">

            <h2 className="h3 fw-bold mb-4">
              Create Support Ticket
            </h2>


            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <input
                  type="text"
                  name="customer_name"
                  placeholder="Customer Name"
                  value={form.customer_name}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>


              <div className="mb-3">
                <input
                  type="email"
                  name="customer_email"
                  placeholder="Email"
                  value={form.customer_email}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>


              <div className="mb-3">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>


              <div className="mb-3">
                <textarea
                  rows="6"
                  name="description"
                  placeholder="Description"
                  value={form.description}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>


              <div className="d-flex gap-3">

                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="btn btn-secondary px-4"
                >
                  Cancel
                </button>


                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary px-4"
                >
                  {loading ? "Creating..." : "Create Ticket"}
                </button>

              </div>

            </form>

          </div>

        </div>

      </div>
    </>
  );
}

export default CreateTicket;