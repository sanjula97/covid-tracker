import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 2000,
  },
};

export const sortData = (data) => {
  const sortedData = [...data];
  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

//Draw circles on the map
export const showDataOnMap = (data, caseType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[caseType].hex}
      fillColor={casesTypeColors[caseType].hex}
      redius={
        Math.sqrt(country[caseType]) * casesTypeColors[caseType].multiplier
      }
    >
      <Popup>
        <div>
          <div
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div>{country.country}</div>
          <div>Cases:{numeral(country.cases).format("0.0")}</div>
          <div>Recovered:{numeral(country.recovered).format("0.0")}</div>
          <div>Deaths:{numeral(country.deaths).format("0.0")}</div>
        </div>
      </Popup>
    </Circle>
  ));
