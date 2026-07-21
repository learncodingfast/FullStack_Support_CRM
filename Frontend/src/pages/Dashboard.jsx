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
    <div className="container-fluid">

  <Navbar />

  <div className="container mt-4">

    <div className="row align-items-center mb-4">
      <div className="col-md-8">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </div>

      <div className="col-md-4">
        <StatusFilter
          status={status}
          setStatus={setStatus}
        />
      </div>
    </div>

    {loading ? (
      <Loader />
    ) : (
      <>
        <div className="card">
          <div className="card-body p-0">
            <div className="table-responsive">
              <TicketTable tickets={tickets} />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <Pagination
            page={page}
            total={total}
            size={size}
            setPage={setPage}
          />
        </div>
      </>
    )}

  </div>

</div>
    </>
  );
}

export default Dashboard;