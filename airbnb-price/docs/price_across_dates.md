---
toc: false
---

<style>

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--sans-serif);
  margin: 4rem 0 8rem;
  text-wrap: balance;
  text-align: center;
}

.hero h1 {
  margin: 2rem 0;
  max-width: none;
  font-size: 14vw;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(30deg, var(--theme-foreground-focus), currentColor);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero h2 {
  margin: 0;
  max-width: 34em;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
}

</style>

<h1>Airbnb Price Trends Throughout the Year</h1>
<div class="grid grid-cols-2" style="grid-auto-rows: 504px;">
  <div class="card">${
    resize((width) => Plot.plot({
      title: "Price trends 🚀",
      subtitle: "Up and to the right!",
      width,
      y: {grid: true, label: "Price"},
      marks: [
        Plot.ruleY([0]),
        Plot.lineY(calendar.filter((item)=>item.listing_id==3686 ), {x: "date", y: "price", tip: true})
      ]
    }))
  }</div>
<div class="card" style="max-width: 640px;">
<h2>Average Price across different date</h2>
<h3>And months have 28–31 days</h3>
${resize((width) => Plot.cell(averagePrices, {
    x: (d) => d.date.getUTCDate(), 
    y: (d) => d.date.getUTCMonth()+1, 
    fill: "averagePrice", 
    tip: true, 
    inset: 0.5
  }).plot({
    width,
    marginTop: 0, 
    height: 240, 
    padding: 0
}))}
</div>  
</div>


```js
const aapl = FileAttachment("aapl.csv").csv({typed: true});
const penguins = FileAttachment("penguins.csv").csv({typed: true});
let calendar = FileAttachment("data/calendar1.csv").csv({typed: true}).then(data => {
  return data.map(d => {
    d.date = new Date(d.date);
    d.price = parseInt(d.price.replace("$", ""));
    return d;
  });
})
```
```js
const groupedData = calendar.reduce((acc, item) => {
  const date = item.date.toISOString().split('T')[0];
  if (!acc[date]) {
    acc[date] = [];
  }
  acc[date].push(item.price);
  return acc;
}, {});

const averagePrices = Object.entries(groupedData).map(([date, prices]) => {
  const averagePrice = prices.reduce((sum, price) => sum + price, 0) / prices.length;
  return { date: new Date(date), averagePrice };
});
```
---
