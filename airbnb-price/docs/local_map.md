---
title: Map
toc: false
---

## Price Explore Map

```js
// Load and transform the data
const listingsData = FileAttachment('data/listings.csv').csv({typed: true});
const neighborhoodsData = FileAttachment('data/neighbourhoods.geojson').json();
```

```js
const neighborhoodNames = neighborhoodsData.features.map((d) => d.properties.neighbourhood);
```

<div class="card">

```js
// add neighborhood selector
const neighborhood = view(Inputs.select(neighborhoodNames));
// add price range slider
const minPrice = view(Inputs.range([0, 1000], {
  title: "Min Price",
  step: 10, 
  value: 100,
  description: "Min Price",
}));
const maxPrice = view(Inputs.range([0, 1000], {
  title: "Max Price",
  step: 10, 
  value: 200,
  description: "Max Price",
}));
```

</div>

```js
// get mean latitude and longitude from csv data
const div = display(document.createElement("div"));
div.style = "height: 400px;";
const map = L.map(div);
const mean_lat = d3.mean(listingsData, d => d.latitude);
const mean_lon = d3.mean(listingsData, d => d.longitude);
map.setView([mean_lat, mean_lon], 12);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})
  .addTo(map);
```

```js
// filter data based on neighborhood and price range
const filteredData = listingsData.filter((d) => {
  return (
    (neighborhood === "All" || d.neighbourhood === neighborhood)
    && d.price >= minPrice && d.price <= maxPrice
  );
});

const mean_lat = d3.mean(filteredData, d => d.latitude);
const mean_lon = d3.mean(filteredData, d => d.longitude);
map.setView([mean_lat, mean_lon], 13);
// remove all markers from the map
map.eachLayer((layer) => {
  if (layer instanceof L.Marker) {
    map.removeLayer(layer);
  }
});

// add choropleth layer to the map
L.geoJson(neighborhoodsData, {
  style: {
    color: "yellow",
    weight: 1,
    fillOpacity: 0.1,
    borderOpacity: 0.5,
    index: 1,
  },
}).addTo(map);

// add hover effect to the choropleth layer
L.geoJson(neighborhoodsData, {
  onEachFeature: (feature, layer) => {
    layer.on({
      mouseover: (e) => {
        layer.setStyle({
          fillOpacity: 0.5,
        });
        // add popup
        layer.bindPopup(feature.properties.neighbourhood).openPopup();
      },
      mouseout: (e) => {
        layer.setStyle({
          fillOpacity: 0.1,
        });
        // remove popup
        layer.closePopup();
      },
      click: (e) => {
        //
      },
    });
  },
}).addTo(map);

// add markers to the map
filteredData.forEach((d) => {
  L.marker(
    [d.latitude, d.longitude],
    {
      title: d.name,
      opacity: 0.7,
      index: 2,
    })
    .bindPopup(`${d.name}- $${d.price}`)
    .addTo(map);
});
```

<div>
Finally, we present an interactive plot, a practical tool for hosts. By selecting their neighborhood, hosts can survey the pricing landscape of their peers, allowing them to position their listing smartly within the local context. This plot is not just a static image but a gateway to an actionable resource, enabling hosts to refine their pricing strategy with real-time data.
</div>