export const getPagesValidity = (id: number, currentPage: number, totalPage: number) =>
(currentPage - 1 <= 0 && id < 5) || // to check if current page is below 3
(currentPage + 2 > totalPage && totalPage - (id + 1) < 5) || // to check if current page is 1 less than the last page
Math.abs(id + 1 - currentPage) <= 2; // to only print 2 pages before and after current page
