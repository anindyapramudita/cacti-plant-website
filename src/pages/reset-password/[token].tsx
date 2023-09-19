import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { NoUserProtectedRoute } from "@/components/protected-route";
import {
  NEW_PASSWORD,
  NEW_PASSWORD_CONF,
  PASSWORD_NOT_MATCH,
  PASSWORD_REQUIREMENT_ERROR,
  SOMETHING_WRONG,
  SUBMIT,
} from "@/shared/utils/constants";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { resetPassword } from "@/db/utils/reset-password";
import { TransitionImage } from "@/components/image";
import { getRegisterImage } from "@/sanity/get-register-image";
import { ImageType } from "@/shared/type/register-type";
import { imagePlaceholder } from "@/shared/utils/image-placeholder";
import { IconButton } from "@/components/icon-button";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { StylesWrapper } from "./index.styles";

export const defaultForm = {
  password: "",
  passwordConfirmation: "",
};

export type FormType = {
  password: string;
  passwordConfirmation: string;
};

export default function ResetPasswordPage({ image }: ImageType) {
  const router = useRouter();
  const { token } = router.query;

  const [currentState, setCurrentState] = useState<{
    isPasswordVisible: boolean;
    isPasswordConfirmationVisible: boolean;
    isLoading: boolean;
    errorVisible: boolean;
    errorMessage: string;
  }>({
    isPasswordVisible: false,
    isPasswordConfirmationVisible: false,
    isLoading: false,
    errorVisible: false,
    errorMessage: "",
  });

  const { register, handleSubmit } = useForm<FormType>({
    defaultValues: defaultForm,
  });

  const handleTogglePassword = () =>
    setCurrentState({
      ...currentState,
      isPasswordVisible: !currentState.isPasswordVisible,
    });
  const handleTogglePasswordConfirmation = () =>
    setCurrentState({
      ...currentState,
      isPasswordConfirmationVisible:
        !currentState.isPasswordConfirmationVisible,
    });

  const onSubmit = handleSubmit(async (data) => {
    setCurrentState({
      ...currentState,
      isLoading: true,
      errorMessage: "",
      errorVisible: false,
    });
    try {
      if (data.password !== data.passwordConfirmation) {
        setCurrentState({
          ...currentState,
          isLoading: false,
          errorMessage: PASSWORD_NOT_MATCH,
          errorVisible: true,
        });
        return;
      }
      const req = await resetPassword(data.password, token);
      if (req.status === 201) {
        setCurrentState({
          ...currentState,
          isLoading: false,
        });
        router.push("/");
      } else {
        setCurrentState({
          ...currentState,
          isLoading: false,
          errorMessage: PASSWORD_REQUIREMENT_ERROR,
          errorVisible: true,
        });
      }
    } catch (e) {
      console.log(e);
      setCurrentState({
        ...currentState,
        isLoading: false,
        errorMessage: SOMETHING_WRONG,
        errorVisible: true,
      });
    }
  });

  return (
    <NoUserProtectedRoute>
      <StylesWrapper>
        <div className="image-side">
          <TransitionImage
            image={image?.src}
            alt={image?.alt}
            placeholder={imagePlaceholder}
          />
        </div>
        <div className="form-wrapper">
          <h1 className="register-header">Reset Password</h1>
          <p>Please submit your new password</p>
          <form className="register-form" onSubmit={onSubmit}>
            <Input
              id="new-password"
              label={NEW_PASSWORD}
              name="password"
              register={register}
              inputStatus={currentState.errorVisible ? "error" : "default"}
              icon={
                currentState.isPasswordVisible ? (
                  <IconButton
                    type="button"
                    onClick={handleTogglePassword}
                    icon={<AiOutlineEyeInvisible size={20} />}
                  />
                ) : (
                  <IconButton
                    type="button"
                    onClick={handleTogglePassword}
                    icon={<AiOutlineEye size={20} />}
                  />
                )
              }
              type={currentState.isPasswordVisible ? "text" : "password"}
              fullWidth={true}
            />
            <Input
              id="new-password-confirmation"
              label={NEW_PASSWORD_CONF}
              name="passwordConfirmation"
              register={register}
              inputStatus={currentState.errorVisible ? "error" : "default"}
              icon={
                currentState.isPasswordConfirmationVisible ? (
                  <IconButton
                    type="button"
                    onClick={handleTogglePasswordConfirmation}
                    icon={<AiOutlineEyeInvisible size={20} />}
                  />
                ) : (
                  <IconButton
                    type="button"
                    onClick={handleTogglePasswordConfirmation}
                    icon={<AiOutlineEye size={20} />}
                  />
                )
              }
              type={
                currentState.isPasswordConfirmationVisible ? "text" : "password"
              }
              fullWidth={true}
            />
            {currentState.errorVisible && (
              <p className="error-message">{currentState.errorMessage}</p>
            )}
            <Button
              className={currentState.errorVisible ? "" : "error-hidden"}
              type="submit"
              isLoading={currentState.isLoading}
            >
              {SUBMIT}
            </Button>
          </form>
        </div>
      </StylesWrapper>
    </NoUserProtectedRoute>
  );
}

export async function getServerSideProps() {
  const image = await getRegisterImage();
  return {
    props: {
      image: image[0],
    },
  };
}
