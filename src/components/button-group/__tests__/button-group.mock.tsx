import { IButtonGroupProps } from "../button-group.interface";

export const buttonGroupMock: IButtonGroupProps = {
  buttons: [
    { label: "Spring", value: "spring" },
    { label: "Summer", value: "summer" },
    { label: "Autumn", value: "autumn" },
    { label: "Winter", value: "winter" },
  ],
  handleButtonClick: (category, value) => {
    console.log(`Button clicked in category ${category} with value: ${value}`);
  },
  category: "season",
  buttonClear: false,
  onClear: (value: boolean) => {
    console.log(`Button clear set to: ${value}`);
  },
};
