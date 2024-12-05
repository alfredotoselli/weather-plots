import { customElementTemplate } from "./line-plot-template.js";
import Plotly from "plotly.js-dist-min";
import { plotlyCss } from "./line-plot-css.js";

class LinePlot extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log("Custom element added to page.");
    const shadow = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = customElementTemplate;

    shadow.appendChild(template.content.cloneNode(true));
    const container = shadow.getElementById("plot");

    const sheet = new CSSStyleSheet();
    sheet.replaceSync(plotlyCss);
    shadow.adoptedStyleSheets = [sheet];

    Plotly.newPlot(
      container,
      [
        {
          x: [1, 2, 3, 4, 5],
          y: [1, 2, 4, 8, 16],
        },
      ],
      {
        margin: { t: 0 },
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
  }
}

customElements.define("line-plot", LinePlot);
