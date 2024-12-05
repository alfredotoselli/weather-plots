export const customElementTemplate = `
<div class="line-plot-container">
    <h2 class="line-plot-title"><slot name="plot-title">Line Plot</slot></h2>
    <div id="line-plot"></div>
    <p class="line-plot-description"><slot name="plot-description">No description provided</slot></p>
</div>
`;
