import React from "react";
import _ from "lodash";

export const useBartApi = () => {
  const [stationList, setStationList] = React.useState([]);

  React.useEffect(() => {
    async function getStations() {
      try {
        const reply = await fetch(
          "https://api.bart.gov/api/etd.aspx?cmd=etd&orig=12th&key=MW9S-E7SL-26DU-VV8V&json=y"
        );
        const data = await reply.json();
        const stationListData = _.get(data, "root.station[0].etd");
        setStationList(stationListData);
      } catch (ex) {
        console.error("Fetch error", ex);
      }
    }
    getStations();
  }, []);

  return stationList;
};
