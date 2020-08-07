import React, { useEffect } from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@material-ui/core";
import "./App.css";
import { useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldWide");

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

    console.log("Yoooo >>>>>", countryCode);
  };
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <InputLabel id="demo-simple-select-autowidth-label">
            WorldWide
          </InputLabel>
          <Select
            value={country}
            variant="outlined"
            labelId="demo-simple-select-autowidth-label"
            onChange={onCountryChange}
          >
            <MenuItem value="worlwide">WorldWide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}

            {/* <MenuItem value="worlwide">WorldWide</MenuItem>
            <MenuItem value="worlwide">Pakistan</MenuItem>
            <MenuItem value="worlwide">England</MenuItem>
            <MenuItem value="worlwide">Westindies</MenuItem>
            <MenuItem value="worlwide">Ireland</MenuItem> */}
          </Select>
        </FormControl>
      </div>

      {/* Header */}
      {/* Title + select input drop down field */}
      {/* InfoBoxes */}
      {/* InfoBoxes */}
      {/* InfoBoxes */}
      {/* Table */}
      {/* Graph */}
      {/* Map */}
    </div>
  );
}

export default App;
