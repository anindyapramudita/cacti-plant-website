export interface ILoginContentProps {
  onClose: () => void;
  onForgotClick: () => void;
  isForgotPassword: boolean;
}

export const defaultForm = {
  email: "",
  password: "",
};

export type FormType = {
  email: string;
  password: string;
};
