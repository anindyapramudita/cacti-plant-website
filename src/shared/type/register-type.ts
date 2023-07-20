export type ImageType = {
  image: { src: string; alt: string };
};

export const DefaultForm = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

export type FormType = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};
