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
      clicked={currentState.buttonClicked}
      buttonStart={currentState.buttonStart}
      buttonEnd={currentState.buttonEnd}
    >
      <button
        className="category-button button-1"
        onClick={() => handleClick("description", 1)}
      >
        <InfoIcon />
      </button>
      <button
        className="category-button button-2"
        onClick={() => handleClick("water", 2)}
      >
        <WaterIcon />
      </button>
      <button
        className="category-button button-3"
        onClick={() => handleClick("care", 3)}
      >
        <CareIcon />
      </button>
      <button
        className="category-button button-4"
        onClick={() => handleClick("seasons", 4)}
      >
        <SeasonIcon />
      </button>
      <button
        className="category-button button-5"
        onClick={() => handleClick("size", 5)}
      >
        <SizeIcon />
      </button>
      <button
        className="category-button button-6"
        onClick={() => handleClick("description", 6)}
      >
        <SunIcon />
      </button>
      <div className="outline-wrapper">
        <div className="button-outline" />
        <div className="arrow-up" />
      </div>
    </StylesWrapper>
  );
};
