import React from "react";

const Pagination = ({ totalPosts, postsPerPage, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center list-none p-0">
        <li className="mx-1">
          <button
            onClick={() => paginate(currentPage - 1)}
            className="border border-blue-500 text-blue px-3 py-1 rounded hover:bg-blue-700 hover:text-white"
            disabled={currentPage === 1}
          >
            &lt;
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`mx-1 ${currentPage === number ? "font-bold text-white" : ""}`}
          >
            <button
              onClick={() => paginate(number)}
              className={`border border-blue-500 text-blue px-3 py-1 rounded ${currentPage === number ? "bg-blue-500 text-blue" : "hover:bg-blue-700 hover:text-white"}`}
            >
              {number}
            </button>
          </li>
        ))}
        <li className="mx-1">
          <button
            onClick={() => paginate(currentPage + 1)}
            className="border border-blue-500 text-blue px-3 py-1 rounded hover:bg-blue-700 hover:text-white"
            disabled={currentPage === pageNumbers.length}
          >
            &gt;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
