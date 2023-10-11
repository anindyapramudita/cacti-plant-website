import { AutocompletePlant } from "@/shared/type/data-types";

export interface IAutocompleteSeachInputProps {
  onSearchChange: (search: string) => void;
  suggestions: AutocompletePlant[];
  onSearchClick: () => void;
}
