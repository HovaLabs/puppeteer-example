import React from "react";
import { Link } from "react-router-dom";
import { get } from "lodash";

import { LocationContext } from "../LocationContext/LocationContext";
import { stations } from "./stations";

function calculateDistance(lon1, lat1, lon2, lat2) {
  const R = 6371; // Radius of the earth in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180; // Javascript functions in radians
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d * 0.621371; // convert to miles
}

export const StationList = () => {
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
        return a.distance - b.distance;
      });

    return () => (
      <>
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
  }, [latitude, longitude]);

  return <Stations />;
};
