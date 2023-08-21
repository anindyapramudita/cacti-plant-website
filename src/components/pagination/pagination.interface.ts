export interface IPaginationProps {
  totalPage: number;
  currentPage: number;
  onPageClick: (newPage: number) => void;
}
