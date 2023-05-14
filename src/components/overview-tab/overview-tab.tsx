import { InformationIcon } from "@/assets/information-icon";
import { PlantIcon } from "@/assets/plant-icon";
import { SignalIcon } from "@/assets/signal-icon";
import { SummerIcon } from "@/assets/summer-icon";
import { WaterIcon } from "@/assets/water-icon";
import { FC } from "react";
import { IOverviewTabProps } from "./overview-tab.interface";
import { StylesWrapper, TabWrapper } from "./overview-tab.styles";

const tabInfo = [
  {
    name: "Information",
    activeIcon: <InformationIcon color="#123132" />,
    nonActiveIcon: <InformationIcon color="white" />,
  },
  {
    name: "Water Content",
    activeIcon: <WaterIcon color="#123132" />,
    nonActiveIcon: <WaterIcon color="white" />,
  },
  {
    name: "Season",
    activeIcon: <SummerIcon color="#123132" />,
    nonActiveIcon: <SummerIcon color="white" />,
  },
  {
    name: "Plant Size",
    activeIcon: <PlantIcon color="#123132" />,
    nonActiveIcon: <PlantIcon color="white" />,
  },
  {
    name: "Difficulty",
    activeIcon: <SignalIcon color="#123132" />,
    nonActiveIcon: <SignalIcon color="white" />,
  },
];

export const OverviewTab: FC<IOverviewTabProps> = ({
  onClickTab,
  activeTab,
}) => {
  // const [activeTab, setActiveTab] = useState<number>(0);
  // if (!children) {
  //   return null;
  // }

  return (
    <StylesWrapper data-testid="overview-tab">
      {tabInfo.map((tab, index) =>
        activeTab === index ? (
          <TabWrapper
            key={index}
            activeTab={activeTab}
            index={index}
            onClick={() => onClickTab(index)}
          >
            {tab.activeIcon}
          </TabWrapper>
        ) : (
          <TabWrapper
            key={index}
            activeTab={activeTab}
            index={index}
            onClick={() => onClickTab(index)}
          >
            {tab.nonActiveIcon}
          </TabWrapper>
        )
      )}
    </StylesWrapper>
  );
};
