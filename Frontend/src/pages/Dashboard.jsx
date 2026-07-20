import { useEffect, useState } from "react";

// import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import StatusFilter from "../components/StatusFilter";
import TicketTable from "../components/TicketTable";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

import { getTickets } from "../services/api";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const [page, setPage] = useState(1);

  const [total, setTotal] = useState(0);

  const size = 10;

  useEffect(() => {
    const timer = setTimeout(() => {
      loadTickets();
    }, 300);

    return () => clearTimeout(timer);
  }, [page, search, status]);

  function loadTickets() {
    setLoading(true);

    getTickets({
      page,
      size,
      search,
      status,
    })
      .then((res) => {
        setTickets(res.data.tickets);
        setTotal(res.data.total);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Navbar/>

      <div className="max-w-6xl mx-auto p-6">

        <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <StatusFilter
            status={status}
            setStatus={setStatus}
          />

        </div>

        {loading ? (
          <Loader />
        ) : (
          <>
            <TicketTable tickets={tickets} />

            <Pagination
              page={page}
              total={total}
              size={size}
              setPage={setPage}
            />
          </>
        )}

      </div>
    </>
  );
}

export default Dashboard;