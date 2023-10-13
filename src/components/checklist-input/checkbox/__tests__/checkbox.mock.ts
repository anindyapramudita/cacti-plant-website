import { ICheckRadioProps } from "../../check-radio";

export const checkboxPropsMock: ICheckRadioProps = {
  label: "Mock Label",
  registerName: "mockRegister",
  checked: false,
  register: () => ({
    onChange: () => console.log("Mock onChange function called."),
    onBlur: () => console.log("Mock onBlur function called."),
    // @ts-ignore unable to mock this function, to be refactored.
    name: "mockRegister",
  }),
};
