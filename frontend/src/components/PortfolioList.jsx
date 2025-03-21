import axios from "axios";
import { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioList() {
  const [portfolio, setPortfolio] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://portfolio-react-lnvm.onrender.com/api/portfolio?page=${currentPage}&limit=${itemsPerPage}`
      )
      .then((res) => {
        setPortfolio(res.data.items);
        setTotalPages(res.data.totalPages);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [currentPage, itemsPerPage]);

  function ServerKeepAlive() {
    useEffect(() => {
      const pingServer = () => {
        axios
          .get("https://portfolio-react-lnvm.onrender.com/api/ping")
          .catch(() => {});
      };

      const interval = setInterval(pingServer, 12 * 60 * 1000);
      return () => clearInterval(interval);
    }, []);

    return null;
  }

  ServerKeepAlive();

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <div className={loading ? "portfolio__list loading" : "portfolio__list"}>
        {loading ? <p className="loader-text">Server wakes up</p> : ""}
        {loading ? (
          <div className="loader">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        ) : (
          portfolio.map((project) => (
            <PortfolioCard project={project} key={project._id} />
          ))
        )}
      </div>
      {!loading && (
        <div className="portfolio__pagination pagination-portfolio">
          <button
            className="pagination-portfolio__btn-prev"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <box-icon name="left-arrow-alt"></box-icon>
          </button>

          <div className="pagination-portfolio__pages-num">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`${
                  currentPage === index + 1
                    ? "pagination-portfolio__btn-item active"
                    : "pagination-portfolio__btn-item"
                }`}
              >
                {index + 1}
              </button>
            ))}{" "}
          </div>

          <button
            className="pagination-portfolio__btn-next"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <box-icon name="right-arrow-alt"></box-icon>
          </button>
        </div>
      )}
    </div>
  );
}
