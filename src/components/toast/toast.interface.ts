export type ToastType = "error" | "success" | "warning";

export type ToastPosition =
  | "top-left"
  | "top-middle"
  | "top-right"
  | "bottom-left"
  | "bottom-middle"
  | "bottom-right";

export interface IToastProps {
  children?: string;
  type: ToastType;
  position: ToastPosition;
  onClose: () => void;
}
