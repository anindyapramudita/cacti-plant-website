import { SearchIcon } from "@/assets/search-icon";
import { FC } from "react";
import { ISeachInputProps } from "./search-input.interface";
import { StylesWrapper } from "./search-input.styles";

export const SearchInput: FC<ISeachInputProps> = ({}) => {
  return (
    <StylesWrapper>
      <input type="textbox" placeholder="search..." />
      <button className="search-button">
        <SearchIcon width={15} />
      </button>
    </StylesWrapper>
  );
};
