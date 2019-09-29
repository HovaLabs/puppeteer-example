import React from "react";
import ReactRouterPropTypes from "react-router-prop-types";

import { StationInfo } from "../packages/StationInfo/StationInfo";

export const StationInfoPage = ({ match }) => (
  <StationInfo station={match.params.abbr} />
);
StationInfoPage.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};
