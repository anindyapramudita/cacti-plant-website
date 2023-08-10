export interface IForgotPasswordContentProps {
  onBackClick: () => void;
  isForgotPassword: boolean;
}

export const defaultForm = {
  email: "",
};

export type FormType = {
  email: string;
};
