```js
const listing_cleaned = FileAttachment("data/listings_cleaned.csv").csv({typed: true});
```

<!-- Plot of launch vehicles -->

```js
const color_map = ["#7D8BE0", "#D5EDF8", "#9A81B0", "#BE715B", "#E5DACA","#EA7D70","#FFD7D6",  "#FFAFAE"]
function popularNeighborhoods(data, {width}) {
  return Plot.plot({
    title: "Popular Neighborhoods",
    width,
    height: 500,
    marginTop: 0,
    marginLeft: 150,
    color: {
      legend: true,
      range: color_map
    },
    marks: [
      Plot.rectX(
        data, 
        Plot.groupY({
          x: "count",
        }, {
          y: (d) => d.neighbourhood.split(",")[0], 
          fill: 'room_type', 
          tip: true, 
          sort: {y: "-x"},
        })),
      Plot.ruleX([0])
    ],
  });
}
```

# Review Text Analysis

<div>
The word cloud offers direct insight into the guest experience, highlighting 'location' as a key determinant in top-tier pricing, along with 'clean' and 'comfortable.' These terms reflect the premium aspects that guests value, potentially guiding hosts on what to emphasize in their listings. By comparing the word cloud plots of reviews from top 10% price and bottom 10% price, we can find some words repetitively shown up but also some words different. For example, “location”, “clean”, “highly recommend” and “rooms”, which show that no matter for low-price customers or high-price customers, they are all expect have good experience with good location, clean house, and better room decorations. However, they are some slightly different words that can be seen in both wordcloud plots. For example, for high-price customers, they are looking for parking lot, and valet service, however for low-price customers, they are looking for metro stations. What’s more, we can see more positive descriptive words in high price reviews, however, there are some negative words in low price reviews, like “die” and “small”. This may indicate that higher price listings would provide better service that would satisfy customers.
</div>

<div class="grid grid-cols-2">
  <div class="card">
    <h2>Word Cloud from top 10% of reviews 🥳</h2>
    </br>
    <img src = "https://verkyyi.github.io/dsan5200-airbnb-story/wordcloud.png" style = "width: 100%">
  </div>
  <div class="card">
    <h2>Word Cloud from bottom 10% of reviews 😰</h2>
    </br>
    <img src= "https://verkyyi.github.io/dsan5200-airbnb-story/wordcloud_trail.jpg" style = "width: 100%">
  </div>
</div>


<h2>
Price distribution among neighborhoods
</h2>

<div>
Knowing the popular accommodation types sets the stage for an in-depth look at the price ranges within these neighborhoods, which could influence a host's decision on where to position their price point.
The box plot underscores the variability within each neighborhood, detailing the high and low ends of pricing. Hosts can use this information to position their listing within the spectrum, considering both average rates and the range of what guests pay.
</div>

<div class="card" style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
  <iframe src="https://verkyyi.github.io/dsan5200-airbnb-story/box.html" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: none; width: 100%; height: 100%; overflow: hidden;"></iframe>
</div>

</br>

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
Our search for influential features brings us to the fourth plot, where the narrative takes a geographical turn. This visualization showcases the average prices across different neighborhoods, revealing stark contrasts. Location emerges as a pivotal factor, with the potential to swing pricing significantly. This insight is crucial for hosts as they consider their pricing in relation to their immediate market environment. From this choropleth map, the user can easily see the color range, with white representing lower price and blue representing higher price, and click on the interested region to know the name and detailed price information. Price-sensitive users can quickly pick out the lowest average price region.
</div>

<div class = "card" style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
  <iframe src="https://verkyyi.github.io/dsan5200-airbnb-story/average_price_map.html" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: none; width: 100%; height: 100%; overflow: hidden;"></iframe> 
</div>