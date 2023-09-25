export type LocationType = "Pakistan" | "India" | "Australia";

export type LocationContext = {
  location: LocationType;
  distance?: number;
};

export type StateType = {
  location: LocationType;
  distance: number;
};

export type ActionType = {
  type: "UPDATE_LOCATION";
  location: LocationType;
  distance?: number;
};
