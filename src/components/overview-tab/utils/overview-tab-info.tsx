import { PiDrop, PiPottedPlant } from "react-icons/pi";
import { FiSun } from "react-icons/fi";
import { FaInfo } from "react-icons/fa";
import { AiFillSignal } from "react-icons/ai";

export const tabInfo = [
  {
    name: "Information",
    icon: <FaInfo />,
  },
  {
    name: "Water Content",
    icon: <PiDrop />,
  },
  {
    name: "Season",
    icon: <FiSun />,
  },
  {
    name: "Plant Size",
    icon: <PiPottedPlant />,
  },
  {
    name: "Difficulty",
    icon: <AiFillSignal />,
  },
];
