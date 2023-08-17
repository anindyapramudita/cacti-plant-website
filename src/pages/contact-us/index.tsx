import { TransitionImage } from "@/components/image";
import { StylesWrapper } from "./contact-us.styles";
import { getRegisterImage } from "@/sanity/get-register-image";
import { ImageType } from "@/shared/type/register-type";
import { imagePlaceholder } from "@/shared/utils/image-placeholder";
import { Input } from "@/components/input";
import {
  CONTACT_US_HEADER,
  EMAIL,
  EMAIL_SENT,
  NAME,
  SEND,
} from "@/shared/utils/constants";
import { useForm } from "react-hook-form";
import { DefaultForm, FormType } from "./contact-us.interface";
import { Button } from "@/components/button";
import { Textarea } from "@/components/textarea";
import { useCallback, useEffect, useState } from "react";
import { sendEmail } from "@/shared/utils/send-email";
import { Toast } from "@/components/toast";

export default function ContactUsPage({ image }: ImageType) {
  const { register, handleSubmit, reset } = useForm<FormType>({
    defaultValues: DefaultForm,
  });

  const [currentState, setCurrentState] = useState<any>({
    isLoading: false,
    toastMessage: "",
    toastType: "success",
  });

  const handleCloseToast = useCallback(() => {
    if (currentState.toastMessage) {
      setCurrentState({ ...currentState, toastMessage: "" });
    }
  }, [currentState]);

  const onSubmit = handleSubmit(async (data) => {
    setCurrentState({ ...currentState, isLoading: true });
    const response = await sendEmail(data);
    if (response.ok) {
      setCurrentState({
        ...currentState,
        isLoading: false,
        toastMessage: EMAIL_SENT,
        toastType: "success",
      });
      reset(DefaultForm);
    } else {
      console.log(response);
      setCurrentState({
        ...currentState,
        isLoading: false,
        toastMessage: response?.status,
        toastType: "error",
      });
    }
  });

  useEffect(() => {
    if (currentState.toastMessage) setTimeout(handleCloseToast, 4950);
  }, [currentState.toastMessage, handleCloseToast]);

  return (
    <StylesWrapper>
      <div className="image-side">
        <TransitionImage
          image={image?.src}
          alt={image?.alt}
          placeholder={imagePlaceholder}
        />
      </div>
      <div className="form-wrapper">
        <h1 className="contact-us-header">{CONTACT_US_HEADER}</h1>
        <form className="contact-us-form" onSubmit={onSubmit}>
          <Input
            id="name"
            label={NAME}
            name="name"
            register={register}
            width="50%"
          />
          <Input
            id="email"
            label={EMAIL}
            name="email"
            register={register}
            width="50%"
          />
          <Textarea
            id="message"
            label="Message"
            name="message"
            register={register}
            rows={10}
            width="50%"
          />
          <Button
            isLoading={currentState.isLoading}
            type="submit"
            className="send-button"
          >
            {SEND}
          </Button>
        </form>
      </div>
      <Toast
        type={currentState.toastType}
        position="bottom-right"
        onClose={handleCloseToast}
      >
        {currentState.toastMessage}
      </Toast>
    </StylesWrapper>
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
