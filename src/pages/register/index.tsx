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

export default function Register({ image }: imageType) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | number>("");
  const [errorVisible, setErrorVisible] = useState<boolean>(false);
  const [isConfirmationVisible, setIsConfirmationVisible] =
    useState<boolean>(false);
  const { register, handleSubmit } = useForm<formType>({
    defaultValues: defaultForm,
  });

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    setErrorVisible(false);
    const response = await createNewUser(data);
    if (response.ok) {
      router.push("/");
      setIsLoading(false);
    } else {
      console.log(response);
      setErrorMessage(response?.status);
      setErrorVisible(true);
      setIsLoading(false);
    }
  });

  const onPasswordClicked = () => setIsPasswordVisible(!isPasswordVisible);
  const onConfirmationClicked = () =>
    setIsConfirmationVisible(!isConfirmationVisible);

  return (
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
            isVisible={isPasswordVisible}
            onClick={onPasswordClicked}
          >
            <input
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder=" "
              {...register("password")}
            />
          </InputContainer>
          <InputContainer
            id="passwordConf"
            label={PASSWORD_CONFIRMATION}
            isVisible={isConfirmationVisible}
            onClick={onConfirmationClicked}
          >
            <input
              id="passwordConf"
              type={isConfirmationVisible ? "text" : "password"}
              placeholder=" "
              {...register("passwordConfirmation")}
            />
          </InputContainer>
          {errorVisible && <p className="error-message">{errorMessage}</p>}
          <Button
            isLoading={isLoading}
            className={errorVisible ? "" : "error-hidden"}
            type="submit"
          >
            {SIGN_UP}
          </Button>
        </form>
      </div>
    </RegisterLayout>
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
