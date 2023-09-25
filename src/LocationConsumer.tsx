import React, { useContext } from "react";
import { LocationsContext } from "./UseContext";

export const LocationConsumer: React.FC = () => {
  const { state, dispatch } = useContext(LocationsContext);

  const handleUpdateLocation = (newLocation: string) => {
    dispatch({
      type: "UPDATE_LOCATION",
      location: newLocation
    });
  };

  const handleUpdateDistance = (newDistance: number) => {
    dispatch({
      type: "UPDATE_LOCATION",
      location: state.location,
      distance: newDistance
    });
  };

  return (
    <div>
      <h2>Location: {state.location}</h2>
      <p>Distance: {state.distance}</p>
      <button onClick={() => handleUpdateLocation("Pakistan")}>
        Set Location to Pakistan
      </button>
      <button onClick={() => handleUpdateLocation("India")}>
        Set Location to India
      </button>
      <button onClick={() => handleUpdateLocation("Australia")}>
        Set Location to Australia
      </button>
      <button onClick={() => handleUpdateDistance(0)}>Reset Distance</button>
      <button onClick={() => handleUpdateDistance(100)}>
        Set Distance to 100
      </button>
    </div>
  );
};
