import { FC, useState } from "react";
import {
  ILoginModalProps,
  defaultForm,
  formType,
} from "./login-modal.interface";
import { Modal } from "@/components/modal";
import { Button } from "../button";
import { StylesWrapper } from "./login-modal.styles";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { InputContainer } from "../input";
import { userSignIn } from "@/hooks/authentication";

export const LoginModal: FC<ILoginModalProps> = ({ open = true, onClose }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorVisible, setErrorVisible] = useState<boolean>(false);
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<formType>({
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

  return (
    <Modal open={open} onClose={handleClose}>
      <StylesWrapper>
        <div className="modal-header">
          <h2>Welcome back!</h2>
        </div>
        <form onSubmit={onSubmit}>
          <InputContainer id="email" label="Email">
            <input
              type="text"
              id="email"
              placeholder=" "
              {...register("email")}
            />
          </InputContainer>
          <InputContainer
            id="password"
            label="Password"
            setIsVisible={setIsVisible}
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
            Login
          </Button>
        </form>
        <div className="footer-container">
          <div className="or-container">
            <p className="no-span">
              <span>or</span>
            </p>
          </div>
          <button type="button" onClick={() => null}>
            <FcGoogle />
            Sign in with Google
          </button>
        </div>
      </StylesWrapper>
    </Modal>
  );
};
