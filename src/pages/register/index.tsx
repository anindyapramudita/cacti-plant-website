import { TransitionImage } from "@/components/image";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { RegisterLayout } from "@/components/layouts/register";
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
import { createNewUser } from "@/shared/utils/user-sign-up";

export default function Register({ image }: ImageType) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | number>("");
  const [errorVisible, setErrorVisible] = useState<boolean>(false);
  const [isConfirmationVisible, setIsConfirmationVisible] =
    useState<boolean>(false);
  const { register, handleSubmit } = useForm<FormType>({
    defaultValues: DefaultForm,
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
          <Input id="name" label={NAME} name="name" register={register} />
          <Input id="email" label={EMAIL} name="email" register={register} />
          <Input
            id="password"
            label={PASSWORD}
            name="password"
            register={register}
            isVisible={isPasswordVisible}
            onClick={onPasswordClicked}
            type={isPasswordVisible ? "text" : "password"}
          />
          <Input
            id="passwordConfirmation"
            label={PASSWORD_CONFIRMATION}
            name="passwordConfirmation"
            register={register}
            isVisible={isConfirmationVisible}
            onClick={onConfirmationClicked}
            type={isConfirmationVisible ? "text" : "password"}
          />
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
