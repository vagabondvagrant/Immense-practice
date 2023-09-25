import React from "react";
import "./styles.css";
import { LocationsProvider } from "./UseContext";
import { LocationConsumer } from "./LocationConsumer";

export default function App() {
  return (
    <LocationsProvider>
      <LocationConsumer />
    </LocationsProvider>
  );
}
