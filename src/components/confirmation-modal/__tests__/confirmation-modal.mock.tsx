import { IConfirmationModalProps } from "../confirmation-modal.interface";

export const confirmationMocalMock: IConfirmationModalProps = {
  title: "Mock Title",
  text: "Mock text for the confirmation modal.",
  actionButtonLabel: "Confirm",
  cancelButtonLabel: "Cancel",
  onCancelClick: () => console.log("Cancel button clicked."),
  onActionClick: () => console.log("Action button clicked."),
  open: true,
  onClose: () => console.log("Modal closed."),
};
