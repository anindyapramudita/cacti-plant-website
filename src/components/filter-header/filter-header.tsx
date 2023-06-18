import { FilterIcon } from "@/assets/filter-icon";
import { FC, useState } from "react";
import { FilterAccordion } from "../filter-accordion";
import { SearchInput } from "../search-input";
import { IFilterHeaderProps } from "./filter-header.interface";
import { StylesWrapper } from "./filter-header.styles";

export const FilterHeader: FC<IFilterHeaderProps> = ({}) => {
  const [isFilterShown, setIsFilterShown] = useState<boolean>(false);
  return (
    <StylesWrapper>
      <div className="filter-top">
        <SearchInput />
        <button
          className={isFilterShown ? "filter-button clicked" : "filter-button"}
          onClick={() => setIsFilterShown(!isFilterShown)}
        >
          <FilterIcon width={20} />
        </button>
      </div>
      <FilterAccordion isOpen={isFilterShown} />
    </StylesWrapper>
  );
};
