import "./style.css";
import { fetchWeather } from "./openmeteo.js";
import "./components/line-plot.js";

async function init() {
  const data = await fetchWeather();

  document.querySelector("#app").innerHTML = `
      <div class="plots-grid">
        <line-plot x-data='${JSON.stringify(
          data.daily.time
        )}' y-data='${JSON.stringify(data.daily.temperature2mMean)}'>
          <h2 slot="plot-title">Temperature Over Time</h2>
          <p slot="plot-description">This graph shows temperature variations during the last week.</p>
        </line-plot>

        <line-plot x-data='${JSON.stringify(
          data.daily.time
        )}' y-data='${JSON.stringify(data.daily.temperature2mMean)}'>
          <h2 slot="plot-title">Temperature Over Time</h2>
          <p slot="plot-description">This graph shows temperature variations during the last week.</p>
      </line-plot>
    </div>
  `;
}

init();
