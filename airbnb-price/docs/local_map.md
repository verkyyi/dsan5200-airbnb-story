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
const neighborhood = view(Inputs.select(neighborhoodNames, {
  label: "Neighborhood",
  value: "Union Station, Stanton Park, Kingman Park",
}));
// add price range slider
const minPrice = view(Inputs.range([0, 1000], {
  label : "Min Price",
  step: 1, 
  value: 100,
}));
const maxPrice = view(Inputs.range([0, 1000], {
  label: "Max Price",
  step: 1, 
  value: 200,
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
    color: "#9DA8E6",
    stroke: false,
    weight: 0.1,
    fillOpacity: 0.1,
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
Finally, we present an interactive plot, a practical tool for hosts. By selecting their neighborhood, hosts can survey the pricing landscape of their peers, allowing them to position their listing smartly within the local context. By zoom in and zoom out the map, the users can know more about the neighborhood information and general picture of the listing’s location. The users can first pick their interested neighbors they want to locate at, then they can pick the price range from $100 to $1,000 per night. By filtering all the factors, the users want to consider, the listings will automatically show up or disappear based on the options. By clicking each listing the user interested in, the detailed information will show up. After filtering and comparing the listings’ location and price information, the users can easily find out their ideal listing.  This plot is not just a static image but a gateway to an actionable resource, enabling hosts to refine their pricing strategy with real-time data.
</div>