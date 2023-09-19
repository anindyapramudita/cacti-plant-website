import { TransitionImage } from "@/components/image";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { getRegisterImage } from "@/sanity/get-register-image";
import { useForm } from "react-hook-form";
import { imagePlaceholder } from "@/shared/utils/image-placeholder";
import { useRouter } from "next/router";
import { useState } from "react";
import { DefaultForm, FormType, ImageType } from "@/shared/type/register-type";
import {
  CACTI,
  EMAIL,
  NAME,
  PASSWORD,
  PASSWORD_CONFIRMATION,
  REGISTER_HEADER,
  SIGN_UP,
} from "@/shared/utils/constants";
import { createNewUser } from "@/db/utils/user-sign-up";
import { NoUserProtectedRoute } from "@/components/protected-route";
import { IconButton } from "@/components/icon-button";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { StylesWrapper } from "./index.styles";

export default function Register({ image }: ImageType) {
  const [currentState, setCurrentState] = useState<{
    isLoading: boolean;
    isPasswordVisible: boolean;
    errorMessage: string | number;
    errorVisible: boolean;
    isConfirmationVisible: boolean;
  }>({
    isLoading: false,
    isPasswordVisible: false,
    errorMessage: "",
    errorVisible: false,
    isConfirmationVisible: false,
  });
  const { register, handleSubmit } = useForm<FormType>({
    defaultValues: DefaultForm,
  });

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    setCurrentState({ ...currentState, isLoading: true, errorVisible: false });
    const response = await createNewUser(data);
    if (response.ok) {
      router.push("/");
      setCurrentState({ ...currentState, isLoading: false });
    } else {
      console.log(response);
      setCurrentState({
        ...currentState,
        errorMessage: response?.status,
        errorVisible: true,
        isLoading: false,
      });
    }
  });

  const onPasswordClicked = () =>
    setCurrentState({
      ...currentState,
      isPasswordVisible: !currentState.isPasswordVisible,
    });
  const onConfirmationClicked = () =>
    setCurrentState({
      ...currentState,
      isConfirmationVisible: !currentState.isConfirmationVisible,
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
          <h1 className="register-header">
            {REGISTER_HEADER} {CACTI}
          </h1>
          <form className="register-form" onSubmit={onSubmit}>
            <Input
              id="register-name"
              label={NAME}
              name="name"
              register={register}
              inputStatus={currentState.errorVisible ? "error" : "default"}
              required
            />
            <Input
              id="register-email"
              label={EMAIL}
              name="email"
              register={register}
              inputStatus={currentState.errorVisible ? "error" : "default"}
              required
            />
            <Input
              id="register-password"
              label={PASSWORD}
              name="password"
              register={register}
              inputStatus={currentState.errorVisible ? "error" : "default"}
              icon={
                currentState.isPasswordVisible ? (
                  <IconButton
                    type="button"
                    onClick={onPasswordClicked}
                    icon={<AiOutlineEyeInvisible size={20} />}
                  />
                ) : (
                  <IconButton
                    type="button"
                    onClick={onPasswordClicked}
                    icon={<AiOutlineEye size={20} />}
                  />
                )
              }
              type={currentState.isPasswordVisible ? "text" : "password"}
              required
            />
            <Input
              id="register-password-confirmation"
              label={PASSWORD_CONFIRMATION}
              name="passwordConfirmation"
              register={register}
              inputStatus={currentState.errorVisible ? "error" : "default"}
              helperText={(currentState.errorMessage as string) || ""}
              icon={
                currentState.isConfirmationVisible ? (
                  <IconButton
                    type="button"
                    onClick={onConfirmationClicked}
                    icon={<AiOutlineEyeInvisible size={20} />}
                  />
                ) : (
                  <IconButton
                    type="button"
                    onClick={onConfirmationClicked}
                    icon={<AiOutlineEye size={20} />}
                  />
                )
              }
              type={currentState.isConfirmationVisible ? "text" : "password"}
              required
            />
            <Button
              isLoading={currentState.isLoading}
              className={currentState.errorVisible ? "" : "error-hidden"}
              type="submit"
            >
              {SIGN_UP}
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
