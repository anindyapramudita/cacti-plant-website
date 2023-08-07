import { FC } from "react";
import { IPaginationProps } from "./pagination.interface";
import { StylesWrapper } from "./pagination.styles";
import {
  BsChevronLeft,
  BsChevronRight,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
} from "react-icons/bs";
import classNames from "classnames";
import { getPagesValidity } from "./utils/get-pages-validity";

export const Pagination: FC<IPaginationProps> = ({
  totalPage,
  currentPage,
  onPageClick,
}) => {
  if (!totalPage || totalPage == 1) {
    return null;
  }

  const renderPages = (id: number) => {
    if (getPagesValidity(id, currentPage, totalPage))
      return (
        <button
          key={id}
          className={classNames("page-button", {
            active: id + 1 === currentPage,
          })}
          onClick={() => onPageClick(id + 1)}
          disabled={currentPage === id + 1}
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
        data-testid="first-page-button"
      >
        <BsChevronDoubleLeft />
      </button>
      <button
        className="page-button"
        onClick={() => onPageClick(currentPage - 1)}
        disabled={currentPage === 1}
        data-testid="previous-page-button"
      >
        <BsChevronLeft />
      </button>
      {Array.from({ length: totalPage }).map((_, i) => renderPages(i))}
      <button
        className="page-button"
        onClick={() => onPageClick(currentPage + 1)}
        disabled={currentPage === totalPage}
        data-testid="next-page-button"
      >
        <BsChevronRight />
      </button>
      <button
        className="page-button"
        onClick={() => onPageClick(totalPage)}
        disabled={currentPage === totalPage}
        data-testid="last-page-button"
      >
        <BsChevronDoubleRight />
      </button>
    </StylesWrapper>
  );
};
