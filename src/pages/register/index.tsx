import { TransitionImage } from "@/components/image";
import { Button } from "@/components/button";
import { InputContainer } from "@/components/input";
import { RegisterLayout } from "@/components/layouts/register";
import { getRegisterImage } from "@/sanity/get-register-image";
import { useForm } from "react-hook-form";
import { imagePlaceholder } from "@/shared/utils/image-placeholder";
import { useRouter } from "next/router";
import { useState } from "react";
import { defaultForm, formType, imageType } from "@/shared/type/register-type";
import {
  CACTI,
  EMAIL,
  NAME,
  PASSWORD,
  PASSWORD_CONFIRMATION,
  REGISTER_HEADER,
  SIGN_UP,
} from "@/shared/utils/constants";
import { createNewUser } from "@/shared/utils/user-sign-up";
import { NoUserProtectedRoute } from "@/components/protected-route";

export default function Register({ image }: imageType) {
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
  const { register, handleSubmit } = useForm<formType>({
    defaultValues: defaultForm,
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
      <RegisterLayout>
        <div className="image-side">
          <TransitionImage
            image={image?.src}
            alt={image?.alt}
            placeholder={imagePlaceholder}
          />
          <div className="welcome-header">
            <h3 className="header-text">{REGISTER_HEADER}</h3>
            <h1 className="logo-text">{CACTI}</h1>
          </div>
        </div>
        <div className="form-wrapper">
          <h1 className="register-header">
            {REGISTER_HEADER} {CACTI}
          </h1>
          <form className="register-form" onSubmit={onSubmit}>
            <InputContainer id="name" label={NAME}>
              <input
                id="name"
                type="text"
                placeholder=" "
                {...register("name")}
              />
            </InputContainer>
            <InputContainer id="email" label={EMAIL}>
              <input
                id="email"
                type="text"
                placeholder=" "
                {...register("email")}
              />
            </InputContainer>
            <InputContainer
              id="password"
              label={PASSWORD}
              isVisible={currentState.isPasswordVisible}
              onClick={onPasswordClicked}
            >
              <input
                id="password"
                type={currentState.isPasswordVisible ? "text" : "password"}
                placeholder=" "
                {...register("password")}
              />
            </InputContainer>
            <InputContainer
              id="passwordConf"
              label={PASSWORD_CONFIRMATION}
              isVisible={currentState.isConfirmationVisible}
              onClick={onConfirmationClicked}
            >
              <input
                id="passwordConf"
                type={currentState.isConfirmationVisible ? "text" : "password"}
                placeholder=" "
                {...register("passwordConfirmation")}
              />
            </InputContainer>
            {currentState.errorVisible && (
              <p className="error-message">{currentState.errorMessage}</p>
            )}
            <Button
              isLoading={currentState.isLoading}
              className={currentState.errorVisible ? "" : "error-hidden"}
              type="submit"
            >
              {SIGN_UP}
            </Button>
          </form>
        </div>
      </RegisterLayout>
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
