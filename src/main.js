import "./style.css";
import { fetchWeather } from "./openmeteo.js";
import { initPlot } from "./plot.js";
document.querySelector("#app").innerHTML = `
  <div>
    <div id="tester" style="width:600px;height:250px;"></div>
  </div>
`;

async function init() {
  const data = await fetchWeather();
  initPlot(
    document.getElementById("tester"),
    data.hourly.time,
    data.hourly.temperature2m
  );
}

init();
