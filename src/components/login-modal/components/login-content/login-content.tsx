import { FC, useState } from "react";
import {
  FormType,
  ILoginContentProps,
  defaultForm,
} from "./login-content.interface";
import { StylesWrapper } from "./login-content.styles";
import {
  CREDENTIALS_INVALID,
  EMAIL,
  FORGOT_PASSWORD_HEADING,
  GOOGLE_SIGN_IN,
  LOGIN_HEADER,
  OR,
  PASSWORD,
  SIGN_IN,
  SOMETHING_WRONG,
} from "@/shared/utils/constants";
import { InputContainer } from "@/components/input";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/button";
import { useForm } from "react-hook-form";
import { userSignIn } from "@/shared/utils/user-sign-in";
import { useRouter } from "next/router";

export const LoginContent: FC<ILoginContentProps> = ({
  onClose,
  onForgotClick,
  isForgotPassword,
}) => {
  const [currentState, setCurrentState] = useState<{
    isVisible: boolean;
    isLoading: boolean;
    errorVisible: boolean;
    errorMessage: string;
  }>({
    isVisible: false,
    isLoading: false,
    errorVisible: false,
    errorMessage: "",
  });

  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<FormType>({
    defaultValues: defaultForm,
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setCurrentState({ ...currentState, isLoading: true });
      const response = await userSignIn(data.email, data.password);
      if (response?.ok) {
        setCurrentState({ ...currentState, isLoading: false });
        handleClose();
        router.push("/");
      } else {
        setCurrentState({
          ...currentState,
          isLoading: false,
          errorVisible: true,
          errorMessage: CREDENTIALS_INVALID,
        });
      }
    } catch (error) {
      console.log(error);
      setCurrentState({
        ...currentState,
        isLoading: false,
        errorVisible: true,
        errorMessage: SOMETHING_WRONG,
      });
    }
  });

  const handleClose = () => {
    reset(defaultForm);
    setCurrentState({
      ...currentState,
      errorVisible: false,
      isLoading: false,
    });
    onClose();
  };

  const onPasswordClicked = () =>
    setCurrentState({
      ...currentState,
      isVisible: !currentState.isVisible,
    });

  return (
    <StylesWrapper
      isForgotPassword={isForgotPassword}
      data-testid="login-content"
    >
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
          isVisible={currentState.isVisible}
        >
          <input
            type={currentState.isVisible ? "text" : "password"}
            id="password"
            placeholder=" "
            {...register("password")}
          />
        </InputContainer>
        <div className="forgot-password-container">
          <button
            className="forgot-password"
            onClick={onForgotClick}
            type="button"
          >
            {FORGOT_PASSWORD_HEADING}
          </button>
        </div>
        {currentState.errorVisible && (
          <p className="error-message" data-testid="error-message">
            {currentState.errorMessage}
          </p>
        )}
        <Button fullWidth type="submit" isLoading={currentState.isLoading}>
          {SIGN_IN}
        </Button>
      </form>
      <div className="footer-container">
        <div className="or-container">
          <p className="or-span">
            <span>{OR}</span>
          </p>
        </div>
        <button type="button" onClick={() => null} className="google-sign-in">
          <FcGoogle />
          {GOOGLE_SIGN_IN}
        </button>
      </div>
    </StylesWrapper>
  );
};
