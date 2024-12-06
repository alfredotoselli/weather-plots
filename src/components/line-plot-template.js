export const customElementTemplate = `
<section class="line-plot-container">
    <h2 class="line-plot-title"><slot name="plot-title">Line Plot</slot></h2>
    <div id="line-plot" role="img" aria-label="Line plot visualization"></div>
    <p class="line-plot-description"><slot name="plot-description">No description provided</slot></p>
</section>
`;
