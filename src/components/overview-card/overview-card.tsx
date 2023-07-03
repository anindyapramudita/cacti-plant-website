import { FC, useMemo, useState } from "react";
import { OverviewTab } from "../overview-tab";
import { IOverviewCardProps } from "./overview-card.interface";
import { StylesWrapper, OverviewCardWrapper } from "./overview-card.styles";

const tabInfo = ["description", "water", "season", "size", "difficulty"];

export const OverviewCard: FC<IOverviewCardProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const renderText = useMemo(() => {
    const seasonList = ["Spring", "Summer", "Fall", "Winter"];
    const activeSeason: string[] = [];

    seasonList.forEach((season) => {
      if (data.season[season.toLowerCase()] === true) {
        activeSeason.push(season);
      }
    });

    if (activeTab === 0) {
      return data[tabInfo[activeTab]];
    } else if (activeTab === 2) {
      return `Plant can live in these seasons: ${activeSeason.join(", ")}`;
    } else {
      return data[tabInfo[activeTab]].info;
    }
  }, [data, activeTab]);

  return (
    <OverviewCardWrapper>
      <OverviewTab onClickTab={setActiveTab} activeTab={activeTab} />
      <StylesWrapper data-testid="overview-tab">
        <p className="overview-text">{renderText}</p>
      </StylesWrapper>
    </OverviewCardWrapper>
  );
};
