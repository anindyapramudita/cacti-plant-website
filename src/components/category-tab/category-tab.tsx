import { FC, useEffect, useState } from "react";
import { ICategoryTab, Info } from "./category-tab.interface";
import { StylesWrapper } from "./category-tab.styles";
import {
  CareIcon,
  InfoIcon,
  SeasonIcon,
  SizeIcon,
  SunIcon,
  WaterIcon,
} from "@/assets";

export const CategoryTab: FC<ICategoryTab> = ({ onClick }) => {
  const [currentState, setCurrentState] = useState<{
    buttonClicked: boolean;
    buttonStart: number;
    buttonEnd: number;
  }>({
    buttonClicked: false,
    buttonStart: 1,
    buttonEnd: 1,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentState.buttonClicked) {
        setCurrentState({ ...currentState, buttonClicked: false });
      }
    }, 500);

    return () => clearInterval(timer);
  }, [currentState]);

  const setButton = (newNumber: number) => {
    const prevButton = currentState.buttonEnd;
    setCurrentState({
      buttonClicked: true,
      buttonStart: prevButton,
      buttonEnd: newNumber,
    });
  };

  const handleClick = (category: Info, button: number) => {
    setButton(button);
    onClick(category);
  };

  return (
    <StylesWrapper
      buttonEnd={currentState.buttonEnd}
      data-testid="category-button-wrapper"
    >
      <button
        className="category-button button-1"
        onClick={() => handleClick("description", 1)}
        data-testid="category-button"
      >
        <InfoIcon />
      </button>
      <button
        className="category-button button-2"
        onClick={() => handleClick("water", 2)}
        data-testid="category-button"
      >
        <WaterIcon />
      </button>
      <button
        className="category-button button-3"
        onClick={() => handleClick("care", 3)}
        data-testid="category-button"
      >
        <CareIcon />
      </button>
      <button
        className="category-button button-4"
        onClick={() => handleClick("seasons", 4)}
        data-testid="category-button"
      >
        <SeasonIcon />
      </button>
      <button
        className="category-button button-5"
        onClick={() => handleClick("size", 5)}
        data-testid="category-button"
      >
        <SizeIcon />
      </button>
      <button
        className="category-button button-6"
        onClick={() => handleClick("description", 6)}
        data-testid="category-button"
      >
        <SunIcon />
      </button>
      <div className="outline-wrapper" data-testid="outline-wrapper">
        <div className="button-outline" />
        <div className="arrow-up" />
      </div>
    </StylesWrapper>
  );
};
