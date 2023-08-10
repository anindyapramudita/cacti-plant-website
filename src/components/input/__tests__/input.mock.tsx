import { UseFormRegister } from "react-hook-form";
import { IInputProps } from "../input.interface";

export const textInputMock: IInputProps = {
  id: "name",
  label: "Name",
  name: "name",
  register: (() => {}) as unknown as UseFormRegister<any>,
  onClick: undefined,
};

export const passwordInputMock: IInputProps = {
  id: "password",
  label: "Password",
  name: "password",
  register: (() => {}) as unknown as UseFormRegister<any>,
  isVisible: false,
  type: "password",
};
