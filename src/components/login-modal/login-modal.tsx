import { FC, useState } from "react";
import { ILoginModalProps } from "./login-modal.interface";
import { Modal } from "@/components/modal";
import { LoginContent } from "./modal-content/login-content";
import { ForgotPasswordContent } from "./modal-content/forgot-password-content/forgot-password-content";
import { StylesWrapper } from "./login-modal.styles";

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
          onClose={handleClose}
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
