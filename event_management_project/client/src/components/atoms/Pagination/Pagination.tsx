import React from "react";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  className,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const generatePagination = () => {
    return Array(totalPages)
      .fill(0)
      .map((_, i) => i + 1)
      .filter((x, _, arr) => {
        if (x === 1) {
          return x;
        } else if (x === currentPage) {
          return x;
        } else if (
          x - 1 === currentPage ||
          x - 2 === currentPage ||
          x + 1 === currentPage ||
          x + 2 === currentPage
        ) {
          return x;
        } else if (x === arr.length) {
          return x;
        }
      })
      .map((x) => (
        <button
          key={x}
          onClick={() => onPageChange(x)}
          className={currentPage === x ? "selected" : ""}
        >
          {x}
        </button>
      ));
  };

  return <div className={className}>{generatePagination()}</div>;
};

export default Pagination;
