import { ICheckRadioProps } from "../check-radio.interface";

export const checkRadioPropsMock: ICheckRadioProps = {
  type: "checkbox", // You can change the type to 'radio' or other appropriate values
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
