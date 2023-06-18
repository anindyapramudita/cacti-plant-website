import { LeafIcon } from "@/assets/leaf-icon";
import { LevelHighIcon } from "@/assets/level-high-icon";
import { LevelLowIcon } from "@/assets/level-low-icon";
import { LevelMedIcon } from "@/assets/level-med-icon";
import { SnowIcon } from "@/assets/snow-icon";
import { SpringIcon } from "@/assets/spring-icon";
import { SummerIcon } from "@/assets/summer-icon";
import { WaterIcon } from "@/assets/water-icon";
import { FC } from "react";
import { Button } from "../button";
import { ButtonGroup } from "../button-group";
import { IFilterAccordionProps } from "./filter-accordion.interface";
import { StylesWrapper } from "./filter-accordion.styles";

const waterFilter = [
  { label: "low", value: 1, icon: <WaterIcon width={10} /> },
  { label: "med", value: 2, icon: <WaterIcon width={15} /> },
  { label: "high", value: 3, icon: <WaterIcon width={17} /> },
];

const seasonFilter = [
  { label: "spring", value: "spring", icon: <SpringIcon width={18} /> },
  { label: "summer", value: "summer", icon: <SummerIcon width={20} /> },
  { label: "autumn", value: "autumn", icon: <LeafIcon width={15} /> },
  { label: "winter", value: "winter", icon: <SnowIcon width={18} /> },
];

const difficultyFilter = [
  { label: "easy", value: 1, icon: <LevelLowIcon width={20} /> },
  { label: "medium", value: 2, icon: <LevelMedIcon width={20} /> },
  { label: "hard", value: 3, icon: <LevelHighIcon width={20} /> },
];

type FilterCategory = "water" | "season" | "difficulty";

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
            <p>Difficulty Level:</p>
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
