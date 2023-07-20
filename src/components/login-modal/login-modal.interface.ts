export interface ILoginModalProps {
  open: boolean;
  onClose: () => void;
}

export const defaultForm = {
  email: "",
  password: "",
};

export type FormType = {
  email: string;
  password: string;
};
