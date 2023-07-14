import { FC, useState } from "react";
import { ILoginModalProps } from "./login-modal.interface";
import { Modal } from "@/components/modal";
import { Button } from "../button";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { StylesWrapper } from "./login-modal.styles";
import { FcGoogle } from "react-icons/fc";

export const LoginModal: FC<ILoginModalProps> = ({ open = true, onClose }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  if (!open) {
    return null;
  }

  return (
    <Modal open={open} onClose={onClose}>
      <StylesWrapper>
        <div className="modal-header">
          <h2>Welcome back to Cacti</h2>
        </div>
        <form>
          <div className="input-container">
            <input type="text" id="email" placeholder=" " />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-container">
            <input
              type={isVisible ? "text" : "password"}
              id="password"
              placeholder=" "
            />
            <label htmlFor="password">Password</label>
            <button
              onClick={() => setIsVisible(!isVisible)}
              type="button"
              className="eye-icon"
            >
              {isVisible ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
          </div>
          <Button fullWidth>Login</Button>
        </form>
        <div className="footer-container">
          <div className="or-container">
            <p className="no-span">
              <span>or</span>
            </p>
          </div>
          <button type="button">
            <FcGoogle />
            Sign in with Google
          </button>
        </div>
      </StylesWrapper>
    </Modal>
  );
};
