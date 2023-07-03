import { FC } from "react";
import { Button } from "../button";
import { ButtonGroup } from "../button-group";
import { IFilterAccordionProps } from "./filter-accordion.interface";
import { StylesWrapper } from "./filter-accordion.styles";
import {
  difficultyFilter,
  seasonFilter,
  waterFilter,
} from "./utils/season-filter";

export const FilterAccordion: FC<IFilterAccordionProps> = ({ isOpen }) => {
  return (
    <StylesWrapper>
      <div className={isOpen ? "content show" : "content"}>
        <div className="content-row">
          <div>
            <p>Water Needs:</p>
            <ButtonGroup
              buttons={waterFilter}
              category="water"
              handleButtonClick={() => null}
            />
          </div>
          <div>
            <p>Bloom Season:</p>
            <ButtonGroup
              buttons={seasonFilter}
              category="season"
              handleButtonClick={() => null}
            />
          </div>
          <div>
            <p>Care Level:</p>
            <ButtonGroup
              buttons={difficultyFilter}
              category="difficulty"
              handleButtonClick={() => null}
            />
          </div>
        </div>
        <div className="buttons">
          <Button size="small" color="secondary" onClick={() => null}>
            Save
          </Button>
          <Button variant="outlined" size="small" color="secondary">
            Clear
          </Button>
        </div>
      </div>
    </StylesWrapper>
  );
};
