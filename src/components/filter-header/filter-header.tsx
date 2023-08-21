import { FC, useState } from "react";
import { SearchInput } from "../search-input";
import { IFilterHeaderProps } from "./filter-header.interface";
import { StylesWrapper } from "./filter-header.styles";
import { BsFilterLeft } from "react-icons/bs";
import { FilterAccordion } from "./components/filter-accordion";
import classNames from "classnames";

export const FilterHeader: FC<IFilterHeaderProps> = ({
  onSaveFilter,
  onClearFilter,
  onSaveSearch,
}) => {
  const [isFilterShown, setIsFilterShown] = useState<boolean>(false);

  return (
    <StylesWrapper>
      <div className="filter-top" data-testid="filter-top">
        <SearchInput onSaveSearch={onSaveSearch} />
        <button
          className={classNames("filter-button", { clicked: isFilterShown })}
          onClick={() => setIsFilterShown(!isFilterShown)}
          data-testid="filter-button"
        >
          <BsFilterLeft size={20} />
        </button>
      </div>
      <FilterAccordion
        isOpen={isFilterShown}
        onSaveFilter={onSaveFilter}
        onClearFilter={onClearFilter}
      />
    </StylesWrapper>
  );
};
