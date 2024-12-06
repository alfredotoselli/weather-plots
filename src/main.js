import "./style.css";
import { fetchDailyTemperatures } from "./services/openmeteo.js";
import "./components/line-plot.js";

async function init() {
  document.querySelector("#app").innerHTML = `
    <header>
      <h1>Global Temperature Trends</h1>
    </header>
    <main class="plots-grid" role="main" aria-label="Temperature plots for major cities">
      <section class="loader-container">
        <div class="loader" role="status" aria-label="Loading temperature data"></div>
      </section>
    </main>
    <footer>
      <p>Data provided by Open-Meteo API</p>
    </footer>
  `;

  const cities = [
    { lat: 41.8919, lon: 12.452, name: "Rome", timezone: "Europe/Rome" },
    { lat: 35.6895, lon: 139.6917, name: "Tokyo", timezone: "Asia/Tokyo" },
    {
      lat: 40.7143,
      lon: -74.006,
      name: "New York",
      timezone: "America/New_York",
    },
    {
      lat: -33.8678,
      lon: 151.2073,
      name: "Sydney",
      timezone: "Australia/Sydney",
    },
  ];

  const data = await fetchDailyTemperatures(cities);

  document.querySelector("main").innerHTML = `
    ${data
      .map(
        (city) => `
      <line-plot 
        x-data='${JSON.stringify(city.daily.time)}' 
        y-data='${JSON.stringify(city.daily.temperature2mMean)}'
        aria-labelledby="desc-${city.location.name.toLowerCase()}"
        role="figure">
        <h2 slot="plot-title">${city.location.name}</h2>
        <p slot="plot-description" id="desc-${city.location.name.toLowerCase()}" 
           aria-labelledby="title-${city.location.name.toLowerCase()}">
          This plot shows daily mean temperature variations during the last year in ${
            city.location.name
          }.
        </p>
      </line-plot>
    `
      )
      .join("")}
  `;
}

init();
