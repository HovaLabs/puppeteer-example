import React from "react";
import { Router } from "./Router";
import { LocationContextContainer } from "./packages/LocationContext/LocationContext";

function App() {
  return (
    <LocationContextContainer>
      <Router />
    </LocationContextContainer>
  );
}

export default App;
