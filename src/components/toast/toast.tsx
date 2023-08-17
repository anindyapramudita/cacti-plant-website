import { FC } from "react";
import { StylesWrapper } from "./toast.styles";
import { IToastProps, ToastType } from "./toast.interface";
import classNames from "classnames";
import { AiFillCheckCircle, AiFillExclamationCircle } from "react-icons/ai";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

export const Toast: FC<IToastProps> = ({
  children,
  type,
  position,
  onClose,
}) => {
  const positions = position.split("-");

  const getICon = (type: ToastType) => {
    if (type === "success")
      return <AiFillCheckCircle className="message-icon" />;
    if (type === "error")
      return <AiFillExclamationCircle className="message-icon" />;
    return <BsFillExclamationTriangleFill className="message-icon" />;
  };

  if (!children) {
    return null;
  }

  return (
    <StylesWrapper
      className={classNames(
        { "toast-top": positions[0] === "top" },
        { "toast-bottom": positions[0] === "bottom" },
        { "toast-left": positions[1] === "left" },
        { "toast-right": positions[1] === "right" },
        { "toast-middle": positions[1] === "middle" },
        `toast-${type}`
      )}
    >
      <div className="toast-message">
        {getICon(type)}
        {children}
      </div>
      <button className="close-button" onClick={onClose}>
        <IoMdClose />
      </button>
    </StylesWrapper>
  );
};
