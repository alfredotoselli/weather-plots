import "./style.css";
import { fetchWeather } from "./openmeteo.js";
import "./components/line-plot.js";
document.querySelector("#app").innerHTML = `
  <div class="plots-grid" >
    <line-plot style="width: 100%;">
      <h2 slot="plot-title">Temperature Over Time</h2>
      <p slot="plot-description">This graph shows temperature variations during the last week.</p>
    </line-plot>
    <line-plot style="width: 100%;">
      <h2 slot="plot-title">Temperature Over Time</h2>
      <p slot="plot-description">This graph shows temperature variations during the last week.</p>
    </line-plot>
  </div>
`;

/*
async function init() {
  const data = await fetchWeather();
}
*/

// init();
