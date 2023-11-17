import { CareIcon, SizeIcon, SunIcon, WaterIcon } from "@/assets";
import { FilterContext, Range, Seasons } from "./plant-filter.interface";

export const defaultForm: FilterContext = {
  water: "3",
  seasons: [],
  care: "3",
  sun: "3",
  size: "3",
  colors: [],
};

export const rangeArray: Range[] = [
  {
    name: "care",
    icon: <CareIcon size={25} />,
    label: ["easy", "med", "hard", "all"],
    information: "how difficult it is to take care of the plant",
  },
  {
    name: "water",
    icon: <WaterIcon size={25} />,
    label: ["low", "med", "high", "all"],
    information: "how frequent you need to water the plant",
  },
  {
    name: "sun",
    icon: <SunIcon size={25} />,
    label: ["low", "med", "high", "all"],
    information: "how much sunlight is needed",
  },
  {
    name: "size",
    icon: <SizeIcon size={25} />,
    label: ["small", "med", "big", "all"],
    information: "how big is the plant",
  },
];

export const seasonButton: Seasons[] = [
  { label: "🌷", value: "spring" },
  { label: "⛅", value: "summer" },
  { label: "🍂", value: "fall" },
  { label: "⛄", value: "winter" },
];
// export const seasonButton: Seasons[] = ["🌷", "⛅", "🍂", "⛄"];

export const colorArray: string[] = [
  "green",
  "blue",
  "red",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "cyan",
];
