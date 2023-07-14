import { FC } from "react";
import { IModalProps } from "./modal.interface";
import { ModalWrapper, ModalContent } from "./modal.styles";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Modal: FC<IModalProps> = ({ open = true, children, onClose }) => {
  if (!open) {
    return null;
  }

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent>
        {children}
        <button onClick={onClose} className="close-button">
          <AiOutlineCloseCircle size={20} />
        </button>
      </ModalContent>
    </ModalWrapper>
  );
};
