import { FC } from "react";
import { ISeachInputProps } from "./search-input.interface";
import { StylesWrapper } from "./search-input.styles";
import { AiOutlineSearch } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { SEARCH } from "@/shared/utils/constants";

export type SearchContext = { search: string };

export const defaultForm: SearchContext = {
  search: "",
};

export const SearchInput: FC<ISeachInputProps> = ({ onSaveSearch }) => {
  const { register, handleSubmit, reset } = useForm<SearchContext>({
    defaultValues: defaultForm,
  });

  const onSubmit = handleSubmit((data) => {
    onSaveSearch(data.search);
    reset(data);
  });

  return (
    <StylesWrapper>
      <form onSubmit={onSubmit}>
        <input type="textbox" placeholder={SEARCH} {...register("search")} />
        <button className="search-button" type="submit">
          <AiOutlineSearch size={15} />
        </button>
      </form>
    </StylesWrapper>
  );
};
