import React, { useEffect } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import InfoBox from "./InfoBox";
import Map from "./Map";
import "./App.css";
import { useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worlwide");

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  };
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select value={country} variant="outlined" onChange={onCountryChange}>
            <MenuItem value="worlwide">WorldWide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="app__stats">
        <InfoBox title="CoronaVirus cases" cases={456} total={2000}></InfoBox>
        <InfoBox title="Recovered" cases={456} total={3000}></InfoBox>
        <InfoBox title="Deaths" cases={456} total={1000}></InfoBox>
      </div>

      {/* Table */}
      {/* Graph */}
      <Map />
    </div>
  );
}

export default App;
