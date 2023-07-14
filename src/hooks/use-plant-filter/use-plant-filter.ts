import { useReducer } from "react";
import { Filter, FilterAction } from "./use-plant-filter.interface";

export const usePlantFilter = () => {
  const defaultState: Filter = {
    search: "",
    filter: {
      water: [],
      season: [],
      care: [],
    },
  };

  const plantReducer = (state: Filter, action: FilterAction): Filter => {
    switch (action.type) {
      case "search.plant":
        return {
          ...state,
          search: action.payload,
        };
      case "update.filter":
        return {
          ...state,
          filter: { ...action.payload },
        };
      case "clear":
        return defaultState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(plantReducer, defaultState);

  return { state, dispatch };
};
