import { FC, useState } from "react";
import { FilterAccordion } from "../filter-accordion";
import { SearchInput } from "../search-input";
import { IFilterHeaderProps } from "./filter-header.interface";
import { StylesWrapper } from "./filter-header.styles";
import { BsFilterLeft } from "react-icons/bs";

export const FilterHeader: FC<IFilterHeaderProps> = () => {
  const [isFilterShown, setIsFilterShown] = useState<boolean>(false);
  return (
    <StylesWrapper>
      <div className="filter-top">
        <SearchInput />
        <button
          className={isFilterShown ? "filter-button clicked" : "filter-button"}
          onClick={() => setIsFilterShown(!isFilterShown)}
        >
          <BsFilterLeft size={20} />
        </button>
      </div>
      <FilterAccordion isOpen={isFilterShown} />
    </StylesWrapper>
  );
};
