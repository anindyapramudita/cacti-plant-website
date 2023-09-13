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
  FORGOT_PASSWORD_LABEL,
  GOOGLE_SIGN_IN,
  LOGIN_HEADER,
  OR,
  PASSWORD,
  SIGN_IN,
  SOMETHING_WRONG,
} from "@/shared/utils/constants";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/button";
import { useForm } from "react-hook-form";
import { userSignIn } from "@/shared/utils/user-sign-in";
import { useRouter } from "next/router";
import { Input } from "@/components/input";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IconButton } from "@/components/icon-button";

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
      setCurrentState({
        ...currentState,
        isLoading: true,
        errorMessage: "",
        errorVisible: false,
      });
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

  const handlePasswordClicked = () =>
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
        <h2 className="heading-text">{LOGIN_HEADER}</h2>
      </div>
      <form className="form-wrapper" onSubmit={onSubmit}>
        <Input
          id="login-modal-email"
          label={EMAIL}
          name={"email"}
          register={register}
          type="text"
          inputStatus={currentState.errorVisible ? "error" : "default"}
          helperText={currentState.errorMessage}
          fullWidth={true}
        />
        <div className="password-container">
          <Input
            id="login-modal-password"
            label={PASSWORD}
            name={"password"}
            register={register}
            type={currentState.isVisible ? "text" : "password"}
            icon={
              currentState.isVisible ? (
                <IconButton
                  type="button"
                  onClick={handlePasswordClicked}
                  icon={<AiOutlineEyeInvisible size={20} />}
                />
              ) : (
                <IconButton
                  type="button"
                  onClick={handlePasswordClicked}
                  icon={<AiOutlineEye size={20} />}
                />
              )
            }
            fullWidth={true}
            inputStatus={currentState.errorVisible ? "error" : "default"}
            helperText={currentState.errorMessage}
          />
          <button
            className="forgot-password"
            onClick={onForgotClick}
            type="button"
          >
            {FORGOT_PASSWORD_LABEL}
          </button>
        </div>
        <Button
          fullWidth
          type="submit"
          color="secondary"
          isLoading={currentState.isLoading}
        >
          {SIGN_IN}
        </Button>
      </form>
      <div className="footer-container">
        <div className="or-container">
          <p className="or-span">
            <span>{OR}</span>
          </p>
        </div>
        <Button
          icon={<FcGoogle />}
          variant="outlined"
          color="primary"
          fullWidth
        >
          {GOOGLE_SIGN_IN}
        </Button>
      </div>
    </StylesWrapper>
  );
};
