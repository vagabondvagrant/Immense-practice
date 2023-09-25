import React, { createContext, useReducer, ReactNode } from "react";
import reducer from "./reducer";
import { StateType, ActionType } from "./types";

export const LocationsContext = createContext<
  | {
      state: StateType;
      dispatch: React.Dispatch<ActionType>;
    }
  | undefined
>(undefined);

interface LocationsProviderProps {
  children: ReactNode;
}

export const LocationsProvider: React.FC<LocationsProviderProps> = ({
  children
}) => {
  const [state, dispatch] = useReducer(reducer, {
    location: "Pakistan",
    distance: 0
  });

  return (
    <LocationsContext.Provider value={{ state, dispatch }}>
      {children}
    </LocationsContext.Provider>
  );
};
