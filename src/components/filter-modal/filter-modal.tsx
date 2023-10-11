import { FC } from "react";
import {
  FilterContext,
  IFilterModalProps,
  defaultForm,
} from "./filter-modal.interface";
import { Modal } from "@/components/modal";
import { StylesWrapper } from "./filter-modal.styles";
import { CheckRadio, Checkbox } from "../checklist-input";
import { useForm } from "react-hook-form";
import { careContent } from "../filter-header/components/filter-accordion/filter-accordion.constants";
import {
  seasonContent,
  sizeContent,
  sunContent,
  waterContent,
} from "./filter-modal.constants";
import { Button } from "../button";

export const FilterModal: FC<IFilterModalProps> = ({
  open = true,
  onClose,
  onSaveFilter,
  onClearFilter,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isDirty },
  } = useForm<FilterContext>({ defaultValues: defaultForm });

  const currentField = watch();

  const handleClose = () => {
    onClose();
  };

  const onSubmit = handleSubmit((data) => {
    onSaveFilter(data);
    reset(data);
    handleClose();
  });

  const handleClear = () => {
    reset(defaultForm);
    onClearFilter();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <StylesWrapper>
        <form className="form-wrapper" onSubmit={onSubmit}>
          <div className="level-wrapper">
            <h3 className="level-heading">Care Level</h3>
            <fieldset
              id="care-level-group"
              className="radio-fieldset-container"
            >
              {careContent.map((care, index) => (
                <CheckRadio
                  key={`care-level-${index}`}
                  id={`care-level-${index}`}
                  value={care.value}
                  label={care.label}
                  registerName="care"
                  register={register}
                  name="care-level-group"
                />
              ))}
            </fieldset>
          </div>
          <div className="level-wrapper">
            <h3 className="level-heading">Water Needs</h3>
            <fieldset
              id="water-needs-group"
              className="radio-fieldset-container"
            >
              {waterContent.map((water, index) => (
                <CheckRadio
                  key={`water-level-${index}`}
                  id={`water-level-${index}`}
                  value={water.value}
                  label={water.label}
                  registerName="water"
                  register={register}
                  name="water-needs-group"
                />
              ))}
            </fieldset>
          </div>
          <div className="level-wrapper">
            <h3 className="level-heading">Sun Needs</h3>
            <fieldset id="sun-needs-group" className="radio-fieldset-container">
              {sunContent.map((sun, index) => (
                <CheckRadio
                  key={`sun-level-${index}`}
                  id={`sun-level-${index}`}
                  value={sun.value}
                  label={sun.label}
                  registerName="sun"
                  register={register}
                  name="sun-needs-group"
                />
              ))}
            </fieldset>
          </div>
          <div className="level-wrapper">
            <h3 className="level-heading">Seasons</h3>
            <fieldset
              id="season-needs-group"
              className="checkbox-fieldset-container"
            >
              {seasonContent.map((season, index) => (
                <Checkbox
                  key={`season-level-${index}`}
                  id={`season-level-${index}`}
                  value={season.value}
                  label={season.label}
                  registerName="seasons"
                  register={register}
                  name="season-needs-group"
                />
              ))}
            </fieldset>
          </div>
          <div className="level-wrapper">
            <h3 className="level-heading">Size Needs</h3>
            <fieldset
              id="size-needs-group"
              className="checkbox-fieldset-container"
            >
              {sizeContent.map((size, index) => (
                <Checkbox
                  key={`size-level-${index}`}
                  id={`size-level-${index}`}
                  value={size.value}
                  label={size.label}
                  registerName="size"
                  register={register}
                  name="size-needs-group"
                />
              ))}
            </fieldset>
          </div>
          <div className="button-divider" />
          <div className="button-wrapper">
            <Button type="submit" disabled={isDirty ? !isDirty : true}>
              Save
            </Button>
            <Button
              color="secondary"
              type="button"
              variant="outlined"
              onClick={handleClear}
              disabled={
                !currentField.water &&
                currentField.seasons.length === 0 &&
                !currentField.care &&
                currentField.size.length === 0 &&
                !currentField.sun
              }
            >
              Clear
            </Button>
          </div>
        </form>
      </StylesWrapper>
    </Modal>
  );
};
