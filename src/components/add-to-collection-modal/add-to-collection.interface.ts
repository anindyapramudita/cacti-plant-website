import { Collection } from "@/shared/type/data-types";
import { ToastType } from "../toast/toast.interface";

export interface IAddToCollectionModalProps {
  open: boolean;
  onClose: () => void;
  plantId: string;
  userId: string;
  collections: Collection[];
  onUpdateToast: (message: string, type: ToastType) => void;
}

export const defaultForm = {
  collectionTitle: "",
};

export type FormType = {
  collectionTitle: string;
};
