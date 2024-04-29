## Average Price by Neighborhood

```js
const listing_cleaned = FileAttachment("data/listings_cleaned.csv").csv({typed: true});
```

<!-- Plot of launch vehicles -->

```js
function popularNeighborhoods(data, {width}) {
  return Plot.plot({
    title: "Popular Neighborhoods",
    width,
    height: 300,
    marginTop: 0,
    marginLeft: 50,
    x: {
      grid: true, 
      label: "Neighborhood",
      tickLabel: {
        angle: -45,
        align: "right"
      }
    },
    color: {legend: true},
    marks: [
      Plot.rectX(
        data, 
        Plot.groupY({
          x: "count",
          }, {
            y: (d) => d.neighbourhood.split(",")[0], 
            fill: "room_type", 
            tip: true, 
            sort: {y: "-x"},
          })),
      Plot.ruleX([0])
    ]
  });
}
```


### Plots

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => popularNeighborhoods(listing_cleaned, {width}))}
  </div>
</div>

### Maps

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
  <iframe src="https://verkyyi.github.io/dsan5200-airbnb-story/average_price_map.html" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: none; width: 100%; height: 100%; overflow: hidden;"></iframe> 
</div>