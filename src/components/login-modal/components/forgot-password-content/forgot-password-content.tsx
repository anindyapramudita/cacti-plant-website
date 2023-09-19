import { FC, useState } from "react";
import {
  FormType,
  IForgotPasswordContentProps,
  defaultForm,
} from "./forgot-password-content.interface";
import { StylesWrapper } from "./forgot-password-content.styles";
import {
  EMAIL,
  EMAIL_NOT_FOUND,
  EMAIL_SENT_HEADING,
  EMAIL_SENT_SUBTITLE,
  FORGOT_PASSWORD_HEADING,
  FORGOT_PASSWORD_SUBTITLE,
  SOMETHING_WRONG,
  SUBMIT,
} from "@/shared/utils/constants";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useForm } from "react-hook-form";
import { BsArrowLeftShort } from "react-icons/bs";
import { sendResetPassword } from "@/db/utils/send-reset-password";
import { RiMailSendLine } from "react-icons/ri";

export const ForgotPasswordContent: FC<IForgotPasswordContentProps> = ({
  onBackClick,
  isForgotPassword,
}) => {
  const [currentState, setCurrentState] = useState<{
    isLoading: boolean;
    errorVisible: boolean;
    errorMessage: string;
    isEmailSent: boolean;
  }>({
    isLoading: false,
    errorVisible: false,
    errorMessage: "",
    isEmailSent: false,
  });

  const { register, handleSubmit, reset } = useForm<FormType>({
    defaultValues: defaultForm,
  });

  const onSubmit = handleSubmit(async (data) => {
    setCurrentState({
      ...currentState,
      errorMessage: "",
      errorVisible: false,
      isLoading: true,
    });

    try {
      const req = await sendResetPassword(data.email);
      if (req.status === 250) {
        setCurrentState({
          ...currentState,
          isLoading: false,
          isEmailSent: true,
        });
      } else {
        setCurrentState({
          ...currentState,
          errorMessage: EMAIL_NOT_FOUND,
          errorVisible: true,
          isLoading: false,
        });
      }
    } catch (e) {
      console.log(e);
      setCurrentState({
        ...currentState,
        errorMessage: SOMETHING_WRONG,
        isLoading: false,
      });
    }
  });

  const handleBackClick = () => {
    onBackClick();
    setCurrentState({
      ...currentState,
      errorVisible: false,
      errorMessage: "",
      isEmailSent: false,
    });
    reset(defaultForm);
  };

  return (
    <StylesWrapper
      isForgotPassword={isForgotPassword}
      data-testid="forgot-password-content"
    >
      <button
        className="back-button"
        type="button"
        onClick={handleBackClick}
        data-testid="back-button"
      >
        <BsArrowLeftShort size={20} />
      </button>
      {currentState.isEmailSent ? (
        <>
          <div className="modal-header" data-testid="email-sent-content">
            <div className="heading-wrapper">
              <RiMailSendLine size={30} className="mail-icon" />
              <h2 className="text-heading">{EMAIL_SENT_HEADING}</h2>
            </div>
            <p className="text-subtitle">{EMAIL_SENT_SUBTITLE}</p>
          </div>
        </>
      ) : (
        <>
          <div className="modal-header">
            <h2 className="text-heading">{FORGOT_PASSWORD_HEADING}</h2>
            <p className="text-subtitle">{FORGOT_PASSWORD_SUBTITLE}</p>
          </div>
          <form className="form-wrapper" onSubmit={onSubmit}>
            <Input
              id="forgot-password-email"
              label={EMAIL}
              name={"email"}
              register={register}
              type="text"
              inputStatus={currentState.errorVisible ? "error" : "default"}
              helperText={currentState.errorMessage}
            />
            <Button
              fullWidth
              type="submit"
              color="secondary"
              isLoading={currentState.isLoading}
              className="submit-button"
            >
              {SUBMIT}
            </Button>
          </form>
        </>
      )}
    </StylesWrapper>
  );
};
