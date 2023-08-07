import { FC } from "react";
import {
  FilterContext,
  IFilterAccordionProps,
  defaultForm,
} from "./filter-accordion.interface";
import { StylesWrapper } from "./filter-accordion.styles";
import {
  careContent,
  seasonContent,
  waterContent,
} from "./filter-accordion.constants";
import { useForm } from "react-hook-form";
import {
  BLOOM_SEASON,
  CARE_LEVEL,
  CLEAR,
  SAVE,
  WATER_NEEDS,
} from "@/shared/utils/constants";
import { Button } from "@/components/button";
import classNames from "classnames";

export const FilterAccordion: FC<IFilterAccordionProps> = ({
  isOpen,
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

  const getClassName = (index: number, array: any[]) => {
    let className = ["button"];
    if (index === 0) className.push("first-child");
    if (index === array.length - 1) className.push("last-child");
    return className.join(" ");
  };

  const handleClear = () => {
    onClearFilter();
    reset(defaultForm);
  };

  const onSubmit = handleSubmit((data) => {
    onSaveFilter(data);
    reset(data);
  });

  return (
    <StylesWrapper>
      <form
        className={classNames("content", { show: isOpen })}
        onSubmit={onSubmit}
        data-testid="filter-accordion"
      >
        <div className="content-row">
          <div>
            <p>{WATER_NEEDS}</p>
            <div className="button-group">
              {waterContent.map((content, index) => (
                <div key={`water-${index}`}>
                  <input
                    hidden
                    type="checkbox"
                    id={`water-${content.value}`}
                    className={getClassName(index, waterContent)}
                    value={content.value}
                    data-testid="water-checkbox"
                    {...register("water")}
                  />
                  <label htmlFor={`water-${content.value}`}>
                    {content?.icon ? content.icon : null}
                    {content.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p>{BLOOM_SEASON}</p>
            <div className="button-group">
              {seasonContent.map((content, index) => (
                <div key={`season-${index}`}>
                  <input
                    hidden
                    type="checkbox"
                    id={`season-${content.value}`}
                    className={getClassName(index, seasonContent)}
                    value={content.value}
                    data-testid="season-checkbox"
                    {...register("season")}
                  />
                  <label htmlFor={`season-${content.value}`}>
                    {content?.icon ? content.icon : null}
                    {content.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p>{CARE_LEVEL}</p>
            <div className="button-group">
              {careContent.map((content, index) => (
                <div key={`care-${index}`}>
                  <input
                    hidden
                    type="checkbox"
                    id={`care-${content.value}`}
                    className={getClassName(index, careContent)}
                    value={content.value}
                    data-testid="care-checkbox"
                    {...register("care")}
                  />
                  <label htmlFor={`care-${content.value}`}>
                    {content?.icon ? content.icon : null}
                    {content.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="buttons">
          <Button
            type="submit"
            size="small"
            color="secondary"
            disabled={isDirty ? !isDirty : true}
          >
            {SAVE}
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            onClick={handleClear}
            disabled={
              currentField.water.length === 0 &&
              currentField.season.length === 0 &&
              currentField.care.length === 0
            }
            data-testid="clear-button"
          >
            {CLEAR}
          </Button>
        </div>
      </form>
    </StylesWrapper>
  );
};
