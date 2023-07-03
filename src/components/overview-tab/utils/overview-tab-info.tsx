import { PiDrop, PiPottedPlant } from "react-icons/pi";
import { FiSun } from "react-icons/fi";
import { FaInfo } from "react-icons/fa";
import { AiFillSignal } from "react-icons/ai";

export const tabInfo = [
  {
    name: "Information",
    activeIcon: <FaInfo color="#123132" />,
    nonActiveIcon: <FaInfo color="white" />,
  },
  {
    name: "Water Content",
    activeIcon: <PiDrop color="#123132" />,
    nonActiveIcon: <PiDrop color="white" />,
  },
  {
    name: "Season",
    activeIcon: <FiSun color="#123132" />,
    nonActiveIcon: <FiSun color="white" />,
  },
  {
    name: "Plant Size",
    activeIcon: <PiPottedPlant color="#123132" />,
    nonActiveIcon: <PiPottedPlant color="white" />,
  },
  {
    name: "Difficulty",
    activeIcon: <AiFillSignal color="#123132" />,
    nonActiveIcon: <AiFillSignal color="white" />,
  },
];
