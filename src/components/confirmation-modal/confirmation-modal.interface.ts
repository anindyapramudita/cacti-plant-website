export interface IConfirmationModalProps {
  title: string;
  text: string;
  actionButtonLabel: string;
  cancelButtonLabel: string;
  onCancelClick: () => void;
  onActionClick: () => void;
  open: boolean;
  onClose: () => void;
}
