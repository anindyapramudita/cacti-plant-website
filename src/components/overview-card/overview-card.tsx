import { FC, useMemo, useState } from "react";
import { OverviewTab } from "../overview-tab";
import { IOverviewCardProps } from "./overview-card.interface";
import { StylesWrapper, OverviewCardWrapper } from "./overview-card.styles";

const tabInfo = ["description", "water", "season", "size", "difficulty"];

export const OverviewCard: FC<IOverviewCardProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  // if (!children) {
  //   return null;
  // }
  // console.log(data[`${tabInfo[activeTab]}`]);
  const renderText = useMemo(() => {
    if (activeTab === 0) {
      return data[tabInfo[activeTab]];
    } else if (activeTab === 2) {
      return `Plant can live in these seasons: ${data[tabInfo[activeTab]].join(
        ", "
      )}`;
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
