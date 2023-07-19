import { FC, useState } from "react";
import {
  ILoginModalProps,
  defaultForm,
  FormType,
} from "./login-modal.interface";
import { Modal } from "@/components/modal";
import { Button } from "../button";
import { StylesWrapper } from "./login-modal.styles";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { InputContainer } from "../input";
import {
  EMAIL,
  GOOGLE_SIGN_IN,
  LOGIN_HEADER,
  OR,
  PASSWORD,
  SIGN_IN,
} from "@/shared/utils/constant";
import { userSignIn } from "@/shared/utils/user-sign-in";

export const LoginModal: FC<ILoginModalProps> = ({ open = true, onClose }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorVisible, setErrorVisible] = useState<boolean>(false);
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<FormType>({
    defaultValues: defaultForm,
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      const response = await userSignIn(data.email, data.password);
      if (response?.ok) {
        handleClose();
        router.push("/");
      } else {
        setErrorVisible(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  });

  const handleClose = () => {
    reset(defaultForm);
    setErrorVisible(false);
    setIsLoading(false);
    onClose();
  };

  if (!open) {
    return null;
  }

  const onPasswordClicked = () => setIsVisible(!isVisible);

  return (
    <Modal open={open} onClose={handleClose}>
      <StylesWrapper>
        <div className="modal-header">
          <h2>{LOGIN_HEADER}</h2>
        </div>
        <form onSubmit={onSubmit}>
          <InputContainer id="email" label={EMAIL}>
            <input
              type="text"
              id="email"
              placeholder=" "
              {...register("email")}
            />
          </InputContainer>
          <InputContainer
            id="password"
            label={PASSWORD}
            onClick={onPasswordClicked}
            isVisible={isVisible}
          >
            <input
              type={isVisible ? "text" : "password"}
              id="password"
              placeholder=" "
              {...register("password")}
            />
          </InputContainer>
          {errorVisible && (
            <p className="error-message">email or password is invalid</p>
          )}
          <Button fullWidth type="submit" isLoading={isLoading}>
            {SIGN_IN}
          </Button>
        </form>
        <div className="footer-container">
          <div className="or-container">
            <p className="no-span">
              <span>{OR}</span>
            </p>
          </div>
          <button type="button" onClick={() => null}>
            <FcGoogle />
            {GOOGLE_SIGN_IN}
          </button>
        </div>
      </StylesWrapper>
    </Modal>
  );
};
