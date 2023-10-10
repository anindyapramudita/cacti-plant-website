import { ChangeEvent, FC, useRef, useState, FocusEvent } from "react";
import { IAutocompleteSeachInputProps } from "./autocomplete-search-input.interface";
import { StylesWrapper } from "./autocomplete-search-input.styles";
import { AiOutlineSearch } from "react-icons/ai";
import { IconButton } from "@/components/icon-button";
import classNames from "classnames";
import { AutocompletePlant } from "@/shared/type/data-types";
import Image from "next/image";
import Link from "next/link";

export const AutocompleteSearchInput: FC<IAutocompleteSeachInputProps> = ({
  onSearchChange,
  suggestions,
  onSearchClick,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const suggestionRef = useRef<HTMLDivElement | null>(null);

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (!e.relatedTarget || !wrapperRef.current) {
      setIsFocused(false);
    } else if (!wrapperRef.current.contains(e.relatedTarget as Node)) {
      setIsFocused(false);
    }
  };

  return (
    <StylesWrapper
      className={classNames(
        { "suggestion-showed": suggestions.length > 0 },
        { hidden: suggestions.length > 0 && !isFocused }
      )}
      ref={wrapperRef}
      onBlur={handleBlur}
    >
      <input
        type="text"
        className="autocomplete-search-input"
        onFocus={handleFocus}
        onChange={handleOnChange}
        placeholder="search"
      />
      <IconButton
        icon={<AiOutlineSearch className="search-icon" />}
        className="search-button"
        onClick={onSearchClick}
      />
      <div
        className={classNames("easy-care-wrapper", {
          hidden: isFocused,
        })}
      >
        <button className="easy-care-button">Easy Care</button>
        <div className="divider" />
      </div>
      <div
        className={classNames("suggestions-wrapper", { hidden: !isFocused })}
        ref={suggestionRef}
      >
        {suggestions.map((suggestion: AutocompletePlant) => (
          <Link
            key={suggestion._id}
            className="suggestion-list"
            href={`/plant/${suggestion._id}`}
          >
            <Image
              src={suggestion.images.src}
              alt={suggestion.images.alt}
              width={24}
              height={24}
              className="plant-suggestion-image"
            />
            <p className="plant-suggestion-name">{suggestion.name}</p>
          </Link>
        ))}
      </div>
    </StylesWrapper>
  );
};
