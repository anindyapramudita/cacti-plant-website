import { FC } from "react";
import { FilterContext, IFilterModalProps } from "./filter-modal.interface";
import { Modal } from "@/components/modal";
import { PlantFilter } from "../plant-filter";

export const FilterModal: FC<IFilterModalProps> = ({
  open = true,
  onClose,
  onSaveFilter,
  onClearFilter,
  defaultFilter,
}) => {
  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (data: FilterContext) => {
    onSaveFilter(data);
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <PlantFilter
        onSaveFilter={handleSubmit}
        onClearFilter={onClearFilter}
        defaultFilter={defaultFilter}
      />
    </Modal>
  );
};
