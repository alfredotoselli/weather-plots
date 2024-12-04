import Plotly from "plotly.js-dist-min";
export function initPlot(container, x_times, y_temps) {
  Plotly.newPlot(
    container,
    [
      {
        x: x_times,
        y: y_temps,
      },
    ],
    {
      margin: { t: 0 },
    }
  );
}
