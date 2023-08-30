import { UseFormRegister } from "react-hook-form";
import { IInputProps } from "../input.interface";
import { BsEye } from "react-icons/bs";

export const textInputMock: IInputProps = {
  id: "name",
  label: "Name",
  name: "name",
  register: (() => {}) as unknown as UseFormRegister<any>,
};

export const TextInputWithIconMock: IInputProps = {
  ...textInputMock,
  icon: <BsEye data-testid="input-icon" />,
};

export const ErrorTextInputMock: IInputProps = {
  ...textInputMock,
  inputStatus: "error",
  helperText: "input error",
};
