import { FC, useEffect, useState } from "react";
import { IButtonGroupProps } from "./button-group.interface";
import { StylesWrapper } from "./button-group.styles";

export const ButtonGroup: FC<IButtonGroupProps> = ({
  buttons,
  handleButtonClick,
  category,
  buttonClear,
  setButtonClear,
}) => {
  const [buttonSelected, setButtonSelected] = useState<number[]>([]);
  const [valueSelected, setValueSelected] = useState<any>([]);

  useEffect(() => {
    if (buttonClear) {
      setButtonSelected([]);
      setValueSelected([]);
      setButtonClear(false);
    }
  }, [buttonClear]);

  const handleClick = (index: number, value: any) => {
    const temp = [...buttonSelected];
    const tempValue = [...valueSelected];
    const findIndex = temp.findIndex((val) => val === index);

    if (findIndex >= 0) {
      temp.splice(findIndex, 1);
      tempValue.splice(findIndex, 1);
    }

    if (findIndex < 0) {
      temp.push(index);
      tempValue.push(value);
    }

    setButtonSelected(temp);
    setValueSelected(tempValue);
    handleButtonClick(category, tempValue);
  };

  if (!buttons || buttons?.length === 0) {
    return null;
  }

  return (
    <StylesWrapper>
      {buttons?.length > 0
        ? buttons.map((button, index) => (
            <button
              key={index}
              className={
                buttonSelected.includes(index) ? "button selected" : "button"
              }
              onClick={() => handleClick(index, button.value)}
            >
              {button?.icon}
              {button.label}
            </button>
          ))
        : null}
    </StylesWrapper>
  );
};
