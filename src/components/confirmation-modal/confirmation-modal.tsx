import { FC } from "react";
import { IConfirmationModalProps } from "./confirmation-modal.interface";
import { Button } from "../button";
import { Modal } from "../modal";
import { StylesWrapper } from "./confirmation-modal.styles";

export const ConfirmationModal: FC<IConfirmationModalProps> = ({
  title,
  text,
  actionButtonLabel,
  cancelButtonLabel,
  onCancelClick,
  onActionClick,
  open,
  onClose,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <StylesWrapper>
        <h3>{title}</h3>
        <p className="description-text">{text}</p>
        <div className="button-wrapper">
          <Button
            color="secondary"
            variant="outlined"
            type="button"
            onClick={onCancelClick}
          >
            {cancelButtonLabel}
          </Button>
          <Button type="button" onClick={onActionClick}>
            {actionButtonLabel}
          </Button>
        </div>
      </StylesWrapper>
    </Modal>
  );
};
