import { FC } from "react";
import { IOverviewTabProps } from "./overview-tab.interface";
import { StylesWrapper, TabWrapper } from "./overview-tab.styles";
import { tabInfo } from "./utils/overview-tab-info";

export const OverviewTab: FC<IOverviewTabProps> = ({
  onClickTab,
  activeTab,
}) => {
  return (
    <StylesWrapper data-testid="overview-tab">
      {tabInfo.map((tab, index) => (
        <TabWrapper
          key={index}
          activeTab={activeTab}
          index={index}
          onClick={() => onClickTab(index)}
        >
          {tab.icon}
        </TabWrapper>
      ))}
    </StylesWrapper>
  );
};
