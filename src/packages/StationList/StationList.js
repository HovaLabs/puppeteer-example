import React from "react";
import { Link } from "react-router-dom";
import { get } from "lodash";

import { LocationContext } from "../LocationContext/LocationContext";
import { stations } from "./stations";
import { calculateDistance } from "./utils";

const sortButtons = ["Distance", "A-Z"];

export const StationList = () => {
  const [selectedSortButton, setSelectedSortButton] = React.useState(
    sortButtons[0]
  );

  const location = React.useContext(LocationContext);
  const longitude = get(location, "coords.longitude");
  const latitude = get(location, "coords.latitude");

  const Stations = React.useMemo(() => {
    const stationArray = stations
      .map(station => {
        let distance = null;
        if (latitude != null && longitude != null) {
          distance = calculateDistance(
            longitude,
            latitude,
            station.longitude,
            station.latitude
          ).toFixed(1);
        }

        return { ...station, distance };
      })
      .sort((a, b) => {
        if (selectedSortButton === sortButtons[0]) {
          return a.distance - b.distance;
        }
        return a.name - b.name;
      });

    return () => (
      <>
        {sortButtons.map(r => (
          <button
            key={r}
            type="button"
            onClick={() => setSelectedSortButton(r)}
            style={{
              background: r === selectedSortButton ? "#FFCCCC" : "#FFFFFF"
            }}
          >
            {r}
          </button>
        ))}
        {stationArray.map(station => (
          <div key={station.abbr}>
            <Link to={`/${station.abbr}`}>
              {station.name},{" "}
              {station.distance == null ? "?" : station.distance} miles away
            </Link>
          </div>
        ))}
      </>
    );
  }, [selectedSortButton, latitude, longitude]);

  return <Stations />;
};
