import React from "react";
import PropTypes from "prop-types";

export const StationInfo = ({ station }) => <div>Your station: {station}</div>;
StationInfo.propTypes = {
  station: PropTypes.string.isRequired
};
