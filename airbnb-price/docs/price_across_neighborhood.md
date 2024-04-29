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
    height: 500,
    marginTop: 0,
    marginLeft: 150,
    x: {
      grid: true, 
      label: "Neighborhood",
      tickLabel: {
        angle: -45,
        align: "right"
      },
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

<div>
With 'location' emerging as a premium factor from the word cloud, we are compelled to investigate how the desirability of different neighborhoods could shape pricing strategies. The horizontal bar chart enters the story, showcasing the popularity of accommodation types in each neighborhood. This plot allows hosts to assess demand for their specific listing type and adjust pricing to the neighborhood's market. From the plot, we can observe that Union Station, Capitol Hill, Columbia Heights, Edgewood, and Dupont Circle are the most popular locations because those areas are close to the train station and tourist attractions, so they are popular for tourists to locate. Also, we can see the relationship between the room types of distribution from this plot. Among all the room types, the entire home/apt and private room are the two most popular room types because people are more willing to have their private living space rather than sharing.
</div>

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => popularNeighborhoods(listing_cleaned, {width}))}
  </div>
</div>

### Maps

<div>
Our search for influential features brings us to the fourth plot, where the narrative takes a geographical turn. This visualization showcases the average prices across different neighborhoods, revealing stark contrasts. Location emerges as a pivotal factor, with the potential to swing pricing significantly. This insight is crucial for hosts as they consider their pricing in relation to their immediate market environment. From this choropleth map, the user can easily see the color range, with green representing lower price and orange representing higher price, and click on the interested region to know the name and detailed price information. Price-sensitive users can quickly pick out the lowest average price region.
</div>

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
  <iframe src="https://verkyyi.github.io/dsan5200-airbnb-story/average_price_map.html" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: none; width: 100%; height: 100%; overflow: hidden;"></iframe> 
</div>