import { FC, useState } from "react";
import { ISeachInputProps } from "./search-input.interface";
import { StylesWrapper } from "./search-input.styles";
import { usePlantFilter } from "@/hooks/use-plant-filter";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchInput: FC<ISeachInputProps> = () => {
  const { dispatch } = usePlantFilter();

  const [searchText, setSearchText] = useState<string>("");
  const handleSearch = () => {
    dispatch({ type: "search.plant", payload: searchText });
  };

  return (
    <StylesWrapper>
      <input
        type="textbox"
        placeholder="search..."
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        <AiOutlineSearch size={15} />
      </button>
    </StylesWrapper>
  );
};
