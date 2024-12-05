import { customElementTemplate } from "./line-plot-template.js";
import Plotly from "plotly.js-dist-min";
import { plotlyCss } from "./line-plot-css.js";

class LinePlot extends HTMLElement {
  static observedAttributes = ["x-data", "y-data"];

  constructor() {
    super();
    this._xData = null;
    this._yData = null;
  }

  connectedCallback() {
    console.log("Custom element added to page.");
    const shadow = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = customElementTemplate;

    shadow.appendChild(template.content.cloneNode(true));
    const container = shadow.getElementById("line-plot");

    const sheet = new CSSStyleSheet();
    sheet.replaceSync(plotlyCss);
    shadow.adoptedStyleSheets = [sheet];

    const plot_colors = "#f1f5f9";
    Plotly.newPlot(
      container,
      [
        {
          x: this._xData,
          y: this._yData,
        },
      ],
      {
        paper_bgcolor: plot_colors,
        plot_bgcolor: plot_colors, // Background color of the plotting area
      },
      {
        responsive: true,
        scrollZoom: true,
      }
    );
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed.`);
    if (name === "x-data") {
      this._xData = JSON.parse(newValue);
    } else if (name === "y-data") {
      this._yData = JSON.parse(newValue);
    }
  }
}

customElements.define("line-plot", LinePlot);
