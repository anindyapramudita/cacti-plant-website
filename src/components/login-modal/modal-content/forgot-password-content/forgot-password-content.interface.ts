export interface ILoginContentProps {
  onClose: () => void;
  onBackClick: () => void;
  isForgotPassword: boolean;
}

export const defaultForm = {
  email: "",
};

export type FormType = {
  email: string;
};
