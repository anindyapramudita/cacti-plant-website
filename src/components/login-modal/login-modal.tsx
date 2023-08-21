import { FC, useState } from "react";
import { ILoginModalProps } from "./login-modal.interface";
import { Modal } from "@/components/modal";
import { StylesWrapper } from "./login-modal.styles";
import { LoginContent } from "./components/login-content";
import { ForgotPasswordContent } from "./components/forgot-password-content";

export const LoginModal: FC<ILoginModalProps> = ({ open = true, onClose }) => {
  const [isForgotPassword, setIsForgotPassword] = useState<boolean>(false);
  const handleForgotClicked = () => setIsForgotPassword(!isForgotPassword);

  const handleClose = () => {
    onClose();
    setIsForgotPassword(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <StylesWrapper>
        <ForgotPasswordContent
          onBackClick={handleForgotClicked}
          isForgotPassword={isForgotPassword}
        />
        <LoginContent
          onClose={handleClose}
          onForgotClick={handleForgotClicked}
          isForgotPassword={isForgotPassword}
        />
      </StylesWrapper>
    </Modal>
  );
};
