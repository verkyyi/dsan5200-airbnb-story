## Airbnb Listings in Washington, DC 🏠

<div>
Our visual tale starts with an interactive bubble plot that answers the basic query, "Why should hosts consider their pricing strategy?" The plot's depth and versatility are designed in such a way that users can zoom in on particular price ranges, filter or isolate neighborhoods of interest, then double-click to return to the entire view. Hosts can learn more about a particular listing's neighborhood, price, rating, and required number of nights by swiping over each bubble. This feature provides a detailed perspective of the data in addition to highlighting an important finding: there is, at most, a weak association between pricing and minimum night stays or guest ratings. The plot prominently features a cluster of listings under $1,000, casting doubt on the notion that listings with greater prices are invariably accompanied by higher ratings or longer stays. It also encourages a more thorough examination of the numerous variables that influence a listing's value.
</div>

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
  <div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%; overflow: scroll;">
    <iframe src="https://verkyyi.github.io/dsan5200-airbnb-story/scatterplot.html" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: none; width: 100%; height: 100%;"></iframe>
  </div>
</div>

## Properties affecting pricing

<div>The parallel coordinates plot of the correlation between many parameters, including price, number of bedrooms, bathrooms, and rating for Airbnb listings. Each line is a single listing, and the rating is reflected in the color gradient. The item's position on the axis corresponds to its features and price. This kind of visualization is especially good at displaying multidimensional interactions and enables the concurrent observation of patterns across several variables. 
This graphic makes it clear that there is more to the relationship between pricing and the mentioned criteria than meets the eye. The lines intersect and crisscross to show how different properties with the same attributes can have quite different ratings and prices. Significant price variations can occur for listings with identical numbers of bedrooms and bathrooms, and greater prices are not invariably associated with higher ratings. These results imply that, although ratings, bathrooms, and bedrooms are significant, they are only a small portion of the greater mosaic of factors that affect pricing. As a result, we should look beyond these conventional measurements to find additional significant variables in the Airbnb market.</div>


<div style="position: relative; width: 100%; height: 100%; padding-bottom: 56.25%;">
  <iframe src="https://verkyyi.github.io/dsan5200-airbnb-story/parallel.html" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: none; width: 100%; height: 100%; overflow: hidden;"></iframe>
</div>

</br>

<h2>Relationship between price with number of baths and bedrooms</h2>

<div>
We look at a heatmap that offers a visual analysis of the cost and commonality of listings according to the number of bedrooms and bathrooms. The color intensity on this heatmap depicts the count of listings with those combinations, while the x-axis displays the number of bedrooms and the y-axis the number of bathrooms. In order to interact with the plot, users can double-click to zoom back out to a more expansive perspective or pick individual locations to zoom in for a thorough view of specific combinations. When you move the mouse pointer over individual blocks, you can see the precise number of listings with that combination of bedrooms and bathrooms.
This plot illustrates how costs are not always directly correlated with the number of bedrooms and bathrooms; instead, the relationship is more complex. Even among postings with the same number of bedrooms and bathrooms, there is a significant price variation, indicating that other considerations may be at play when setting prices. Users can investigate these patterns in more detail thanks to the zoom and hover functions, which may reveal factors other than the properties' physical characteristics that are at work.
</div>

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
  <iframe src="https://verkyyi.github.io/dsan5200-airbnb-story/density.html" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: none; width: 100%; height: 100%; overflow: hidden;"></iframe>
</div>

<h2> Questions? </h2>
<div>
Above plots prompt a deeper dive into the subjective factors of guest experience. What qualities do guests actually talk about, and how do those preferences align with their willingness to pay?
</div>