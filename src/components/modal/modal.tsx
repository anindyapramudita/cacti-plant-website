import { FC, MouseEvent } from "react";
import { IModalProps } from "./modal.interface";
import { ModalWrapper } from "./modal.styles";
import { AiOutlineClose } from "react-icons/ai";
import { IconButton } from "../icon-button";

export const Modal: FC<IModalProps> = ({ open = true, children, onClose }) => {
  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!open) {
    return null;
  }

  return (
    <ModalWrapper onClick={handleOverlayClick}>
      <div className="modal-content">
        {children}
        <IconButton
          icon={<AiOutlineClose size={15} className="close-icon" />}
          onClick={onClose}
          className="close-button"
        />
      </div>
    </ModalWrapper>
  );
};
