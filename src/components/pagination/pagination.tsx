import { FC } from "react";
import { IPaginationProps } from "./pagination.interface";
import { StylesWrapper } from "./pagination.styles";
import {
  BsChevronLeft,
  BsChevronRight,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
} from "react-icons/bs";

export const Pagination: FC<IPaginationProps> = ({
  totalPage,
  currentPage,
  onPageClick,
}) => {
  if (!totalPage || totalPage == 1) {
    return null;
  }

  const getClassName = (id: number) => {
    if (id + 1 === currentPage) return "page-button active";
    return "page-button";
  };

  const getPagesValidity = (id: number) =>
    (currentPage - 1 <= 0 && id < 5) || // to check if current page is below 3
    (currentPage + 2 > totalPage && totalPage - (id + 1) < 5) || // to check if current page is 1 less than the last page
    Math.abs(id + 1 - currentPage) <= 2; // to only print 2 pages before and after current page

  const getPages = (id: number) => {
    if (getPagesValidity(id))
      return (
        <button
          key={id}
          className={getClassName(id)}
          onClick={() => onPageClick(id + 1)}
        >
          {id + 1}
        </button>
      );
  };

  return (
    <StylesWrapper>
      <button
        className="page-button"
        onClick={() => onPageClick(1)}
        disabled={currentPage === 1}
      >
        <BsChevronDoubleLeft />
      </button>
      <button
        className="page-button"
        onClick={() => onPageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <BsChevronLeft />
      </button>
      {Array.from({ length: totalPage }).map((_, i) => getPages(i))}
      <button
        className="page-button"
        onClick={() => onPageClick(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
        <BsChevronRight />
      </button>
      <button
        className="page-button"
        onClick={() => onPageClick(totalPage)}
        disabled={currentPage === totalPage}
      >
        <BsChevronDoubleRight />
      </button>
    </StylesWrapper>
  );
};
