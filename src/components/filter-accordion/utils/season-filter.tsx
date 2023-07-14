import { PiDrop, PiFlower, PiSnowflakeBold } from "react-icons/pi";
import { FiSun } from "react-icons/fi";
import { RiLeafLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";

export type FilterContext = {
  water: (number | string)[];
  season: (number | string)[];
  care: (number | string)[];
};

export const defaultForm: FilterContext = {
  water: [],
  season: [],
  care: [],
};

export const waterContent = [
  {
    label: "Low",
    value: 1,
    icon: (
      <div>
        <PiDrop size={12} />
      </div>
    ),
  },
  {
    label: "Med",
    value: 2,
    icon: (
      <div>
        <PiDrop size={12} />
        <PiDrop size={12} />
      </div>
    ),
  },
  {
    label: "High",
    value: 3,
    icon: (
      <div>
        <PiDrop size={12} />
        <PiDrop size={12} />
        <PiDrop size={12} />
      </div>
    ),
  },
];

export const careContent = [
  {
    label: "Low",
    value: 1,
    icon: (
      <div>
        <AiOutlineHeart size={12} />
      </div>
    ),
  },
  {
    label: "Med",
    value: 2,
    icon: (
      <div>
        <AiOutlineHeart size={12} />
        <AiOutlineHeart size={12} />
      </div>
    ),
  },
  {
    label: "High",
    value: 3,
    icon: (
      <div>
        <AiOutlineHeart size={12} />
        <AiOutlineHeart size={12} />
        <AiOutlineHeart size={12} />
      </div>
    ),
  },
];

export const seasonContent = [
  { label: "Spring", value: "spring", icon: <PiFlower size={12} /> },
  { label: "Summer", value: "summer", icon: <FiSun size={12} /> },
  { label: "Fall", value: "fall", icon: <RiLeafLine size={12} /> },
  { label: "Winter", value: "winter", icon: <PiSnowflakeBold size={12} /> },
];
