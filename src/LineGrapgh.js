import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

function LineGrapgh() {
  const [data, setData] = useState({});

  const buildChartData = (data, caseType = "cases") => {
    const chartData = [];
    let lastDataPoint;
    for (let date in data.cases) {
      if (lastDataPoint) {
        let newDataPoint = {
          x: date,
          y: data[caseType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[caseType][date];
    }
    return chartData;
  };

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const chartData = buildChartData(data);
        setData(chartData);
      });
  }, []);

  return (
    <div>
      <h1>iM A GRAPH</h1>
      {/* <Line data options /> */}
    </div>
  );
}

export default LineGrapgh;
