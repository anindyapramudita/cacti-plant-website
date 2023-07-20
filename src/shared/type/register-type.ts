export type imageType = {
  image: { src: string; alt: string };
};

export const defaultForm = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

export type formType = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};
