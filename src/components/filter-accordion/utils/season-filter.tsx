import { PiDrop, PiFlower, PiSnowflakeBold, PiHeartFill } from "react-icons/pi";
import { FiSun } from "react-icons/fi";
import { RiLeafLine } from "react-icons/ri";

export const waterFilter = [
  { label: "low", value: 1, icon: <PiDrop size={12} /> },
  { label: "med", value: 2, icon: <PiDrop size={16} /> },
  { label: "high", value: 3, icon: <PiDrop size={20} /> },
];

export const seasonFilter = [
  {
    label: "spring",
    value: "spring",
    icon: <PiFlower size={20} />,
  },
  {
    label: "summer",
    value: "summer",
    icon: <FiSun size={20} />,
  },
  {
    label: "autumn",
    value: "autumn",
    icon: <RiLeafLine size={20} />,
  },
  {
    label: "winter",
    value: "winter",
    icon: <PiSnowflakeBold size={20} />,
  },
];

export const difficultyFilter = [
  { label: "easy", value: 1, icon: <PiHeartFill /> },
  {
    label: "medium",
    value: 2,
    icon: (
      <div>
        <PiHeartFill />
        <PiHeartFill />
      </div>
    ),
  },
  {
    label: "hard",
    value: 3,
    icon: (
      <div>
        <PiHeartFill />
        <PiHeartFill />
        <PiHeartFill />
      </div>
    ),
  },
];
