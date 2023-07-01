import { FC, useState } from "react";
import { IButtonGroupProps } from "./button-group.interface";
import { StylesWrapper } from "./button-group.styles";

export const ButtonGroup: FC<IButtonGroupProps> = ({
  buttons,
  handleButtonClick,
  category,
}) => {
  const [buttonSelected, setButtonSelected] = useState<number[]>([]);

  const handleClick = (index: number, value: any) => {
    handleButtonClick(category, value);
    const temp = [...buttonSelected];
    const findIndex = temp.findIndex((val) => val === index);
    if (findIndex >= 0) {
      temp.splice(findIndex, 1);
      setButtonSelected(temp);
    } else {
      temp.push(index);
      setButtonSelected(temp);
    }
  };

  if (!buttons || buttons?.length === 0) {
    return null;
  }

  return (
    <StylesWrapper>
      {buttons?.length > 0
        ? buttons.map((button, index) => (
            <button
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
