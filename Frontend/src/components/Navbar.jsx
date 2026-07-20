import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Support CRM
        </Link>

        <Link
          to="/new"
          className="bg-white text-dark px-4 py-2 rounded hover:bg-gray-100"
        >
          + New Ticket
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;