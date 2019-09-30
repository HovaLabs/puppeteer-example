import React from "react";
import PropTypes from "prop-types";

export const LocationContext = React.createContext(null);

const locationOptions = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000
};

export const LocationContextContainer = ({ children }) => {
  const [location, setLocation] = React.useState(null);

  React.useEffect(() => {
    function geoSuccess(position) {
      setLocation(position);
    }
    function geoError(error) {
      console.error("Error retrieving position", error);
    }

    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(
        geoSuccess,
        geoError,
        locationOptions
      );
    }
  }, []);

  return (
    <LocationContext.Provider value={location}>
      {children}
    </LocationContext.Provider>
  );
};
LocationContextContainer.propTypes = {
  children: PropTypes.node.isRequired
};
