---
theme: dashboard
title: Overview
toc: false
---

# Data Overview 📉

<!-- Load and transform the data -->

```js
const listing = FileAttachment("data/listings.csv").csv({typed: true});
const details = FileAttachment("data/listings_detailed.csv").csv({typed: true});
```
The dataset contains ${listing.length} Airbnb listings in Washington, DC. The listings include information such as the listing ID, host ID, neighbourhood, price, and more.

```js
Inputs.table(listing)
```

```js
Inputs.table(details)
```

```js
const dataPoints = listing.length;
const prices = listing.map((d) => d.price);
const maxPrice = Math.max(...prices);
const minPrice = Math.min(...prices);
const avgPrice = Math.round(d3.mean(prices));
// show unique room types
const roomTypes = [...new Set(listing.map((d) => d.room_type))];
// group average price by room type
const avgPriceByRoomType = roomTypes.map((roomType) => {
  const prices = listing.filter((d) => d.room_type === roomType).map((d) => d.price);
  return {
    roomType,
    avgPrice: Math.round(d3.mean(prices)),
  };
});
const avgPrice_PrivateRoom = avgPriceByRoomType.find((d) => d.roomType === "Private room").avgPrice;
const avgPrice_EntireHome = avgPriceByRoomType.find((d) => d.roomType === "Entire home/apt").avgPrice;
const avgPrice_SharedRoom = avgPriceByRoomType.find((d) => d.roomType === "Shared room").avgPrice;
```

<div class="grid grid-cols-4">
  <div class="card">
    <h2>Listing Count ☝️</h2>
    <span class="big">${dataPoints.toLocaleString("en-US")}</span>
  </div>
  <div class="card">
    <h2>Price Range 🏷️</h2>
    <span class="big">${minPrice.toLocaleString("en-US") + "~" + maxPrice.toLocaleString("en-US")
  }</span>
  </div>
  <div class="card">
    <h2>Average Price</h2>
    <span class="big">${avgPrice.toLocaleString("en-US")}</span>
  </div>
  <div class="card">
    <h2>Average Price (Entire Home/Apt)</h2>
    <span class="big">${avgPrice_EntireHome.toLocaleString("en-US")}</span>
  </div>
  <div class="card">
    <h2>Average Price (Private Room)</h2>
    <span class="big">${avgPrice_PrivateRoom.toLocaleString("en-US")}</span>
  </div>
  <div class="card">
    <h2>Average Price (Shared Room)</h2>
    <span class="big">${avgPrice_SharedRoom.toLocaleString("en-US")}</span>
  </div>
</div>

```js
Plot.rectY(avgPriceByRoomType, {x: "roomType", y: "avgPrice"}).plot()
```

```js
// Histogram of beds count
const bedroomCounts = details.map((d) => d.beds);
const bedroomCountsHistogram = d3.rollup(
  bedroomCounts,
  (v) => v.length,
  (d) => d
);
const bedroomCountsData = Array.from(bedroomCountsHistogram, ([key, value]) => ({beds: key, count: value}));
display(Plot.barY(bedroomCountsData, {x: "beds", y: "count"}).plot())
```