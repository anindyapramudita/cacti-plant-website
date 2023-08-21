import { Button } from "@/components/button";
import { InputContainer } from "@/components/input";
import { ForgotPasswordLayout } from "@/components/layouts/forgot-password";
import { NoUserProtectedRoute } from "@/components/protected-route";
import {
  PASSWORD_NOT_MATCH,
  PASSWORD_REQUIREMENT_ERROR,
  SOMETHING_WRONG,
  SUBMIT,
} from "@/shared/utils/constants";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { resetPassword } from "../../../db/utils/reset-password";
import { TransitionImage } from "@/components/image";
import { getRegisterImage } from "@/sanity/get-register-image";
import { imageType } from "@/shared/type/register-type";
import { imagePlaceholder } from "@/shared/utils/image-placeholder";

export const defaultForm = {
  password: "",
  passwordConfirmation: "",
};

export type FormType = {
  password: string;
  passwordConfirmation: string;
};

export default function ResetPasswordPage({ image }: imageType) {
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
      <ForgotPasswordLayout>
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
            <InputContainer
              id="new-password"
              label="New Password"
              onClick={handleTogglePassword}
              isVisible={currentState.isPasswordVisible}
            >
              <input
                id="new-password"
                type={currentState.isPasswordVisible ? "text" : "password"}
                placeholder=" "
                {...register("password")}
              />
            </InputContainer>
            <InputContainer
              id="new-password-confirmation"
              label="New Password Confirmation"
              onClick={handleTogglePasswordConfirmation}
              isVisible={currentState.isPasswordConfirmationVisible}
            >
              <input
                id="new-password-confirmation"
                type={
                  currentState.isPasswordConfirmationVisible
                    ? "text"
                    : "password"
                }
                placeholder=" "
                {...register("passwordConfirmation")}
              />
            </InputContainer>
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
      </ForgotPasswordLayout>
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
