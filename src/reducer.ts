import { StateType, ActionType } from "./types";

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "UPDATE_LOCATION":
      return {
        location: action.location,
        distance: action.distance || 0
      };
    default:
      return state;
  }
};

export default reducer;
