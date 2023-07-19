import { FC } from "react";
import { Button } from "../button";
import { IFilterAccordionProps } from "./filter-accordion.interface";
import { StylesWrapper } from "./filter-accordion.styles";
import {
  FilterContext,
  careContent,
  defaultForm,
  seasonContent,
  waterContent,
} from "./utils/season-filter";
import { useForm } from "react-hook-form";
import {
  BLOOM_SEASON,
  CARE_LEVEL,
  CLEAR,
  SAVE,
  WATER_NEEDS,
} from "@/shared/utils/constant";

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
      <form className={isOpen ? "content show" : "content"} onSubmit={onSubmit}>
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
          >
            {CLEAR}
          </Button>
        </div>
      </form>
    </StylesWrapper>
  );
};
