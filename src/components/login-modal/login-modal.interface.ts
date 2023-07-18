export interface ILoginModalProps {
  open: boolean;
  onClose: () => void;
}

export const defaultForm = {
  email: "",
  password: "",
};

export type formType = {
  email: string;
  password: string;
};
