import React from "react";
import { Link } from "react-router-dom";

import { stations } from "./stations";

export const StationList = () => (
  <div>
    {stations.map(station => (
      <div key={station.abbr}>
        <Link to={`/${station.abbr}`}>{station.name}</Link>
      </div>
    ))}
  </div>
);
