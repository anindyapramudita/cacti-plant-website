import { FC, useState } from "react";
import {
  FilterContext,
  IPlantFilterProps,
  Range,
} from "./plant-filter.interface";
import { StylesWrapper } from "./plant-filter.styles";
import { RangeInput } from "../range-input";
import classNames from "classnames";
import {
  colorArray,
  defaultForm,
  rangeArray,
  seasonButton,
} from "./plant-filter.constants";
import { CheckboxButton, ColorCheckboxButton } from "../checklist-input";
import { useForm } from "react-hook-form";
import { Tooltip } from "../tooltip";
import { Button } from "../button";

export const PlantFilter: FC<IPlantFilterProps> = ({
  onSaveFilter,
  onClearFilter,
  defaultFilter = defaultForm,
}) => {
  const [isColorOpen, setIsColorOpen] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    // formState: { isDirty },
  } = useForm<FilterContext>({ defaultValues: defaultFilter });

  const currentForm = watch();

  const renderRange = (range: Range, index: number) => {
    return (
      <div className="range-input-wrapper" key={`range-input-wrapper-${index}`}>
        <Tooltip label={range.icon} information={range.information} />
        <RangeInput
          min={0}
          max={3}
          defaultValue={3}
          step="1"
          register={register}
          name={range.name}
        />
        <p style={{ width: 20, textAlign: "end", fontSize: 12 }}>
          {range.label[currentForm[range.name] as unknown as number]
            ? range.label[currentForm[range.name] as unknown as number]
            : "all"}
        </p>
      </div>
    );
  };

  const renderFirstRowColor = (color: string, index: number) => {
    if (index <= 5) {
      return (
        <ColorCheckboxButton
          id={`color-range-${index}`}
          key={`color-range-${index}`}
          style={{ backgroundColor: color }}
          value={color}
          registerName="colors"
          register={register}
          color={color}
        />
      );
    }
  };

  const renderSecondRowColor = (color: string, index: number) => {
    if (index > 5) {
      return (
        <ColorCheckboxButton
          key={`color-range-${index}`}
          id={`color-range-${index}`}
          style={{ backgroundColor: color }}
          registerName="colors"
          register={register}
          color={color}
          value={color}
        />
      );
    }
  };

  const onSubmit = handleSubmit((data) => {
    onSaveFilter(data);
  });

  const handleReset = () => {
    reset(defaultForm);
    onClearFilter();
  };

  return (
    <StylesWrapper>
      <div className="filter-header">Filters</div>
      <form className="filter-range-content" onSubmit={onSubmit}>
        {rangeArray.map((range, index: number) => renderRange(range, index))}
        <hr className="divider" />
        <div className="button-wrapper">
          {seasonButton.map((season, index) => (
            <CheckboxButton
              key={`season-level-${index}`}
              id={`season-level-${index}`}
              value={season.value}
              label={season.label}
              registerName="seasons"
              register={register}
              name="season-needs-group"
            />
          ))}
        </div>
        <hr className="divider" />
        <div className="color-wrapper">
          {colorArray.map((color, index: number) =>
            renderFirstRowColor(color, index)
          )}
          <button
            className={classNames("color-range-arrow", { open: isColorOpen })}
            onClick={() => setIsColorOpen(!isColorOpen)}
          />
          {isColorOpen &&
            colorArray.map((color, index: number) =>
              renderSecondRowColor(color, index)
            )}
        </div>
        <hr className="divider" />
        <div className="filter-button-group">
          <Button color="primary" type="submit" fullWidth>
            Filter
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            type="button"
            onClick={handleReset}
            fullWidth
          >
            Clear
          </Button>
        </div>
      </form>
    </StylesWrapper>
  );
};
