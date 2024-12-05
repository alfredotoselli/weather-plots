export const customElementTemplate = `
<div class="plot-container">
    <h2 class="plot-title"><slot name="plot-title">Line Plot</slot></h2>
    <div id="plot"></div>
    <p class="plot-description"><slot name="plot-description">No description provided</slot></p>
</div>
`;
