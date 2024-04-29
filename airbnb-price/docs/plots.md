## Airbnb Listings in Washington, DC 🏠

<div>
Our visual tale starts with an interactive bubble plot that answers the basic query, "Why should hosts consider their pricing strategy?" The plot's depth and versatility are designed in such a way that users can zoom in on particular price ranges, filter or isolate neighborhoods of interest, then double-click to return to the entire view. Hosts can learn more about a particular listing's neighborhood, price, rating, and required number of nights by swiping over each bubble. This feature provides a detailed perspective of the data in addition to highlighting an important finding: there is, at most, a weak association between pricing and minimum night stays or guest ratings. The plot prominently features a cluster of listings under $1,000, casting doubt on the notion that listings with greater prices are invariably accompanied by higher ratings or longer stays. It also encourages a more thorough examination of the numerous variables that influence a listing's value.
</div>

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
  <div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%; overflow: scroll;">
    <iframe src="https://verkyyi.github.io/dsan5200-airbnb-story/scatter.html" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: none; width: 100%; height: 100%;"></iframe>
  </div>
</div>

## Properties affecting pricing

<div>The parallel coordinates plot of the correlation between many parameters, including price, number of bedrooms, bathrooms, and rating for Airbnb listings. Each line is a single listing, and the rating is reflected in the color gradient. The item's position on the axis corresponds to its features and price. This kind of visualization is especially good at displaying multidimensional interactions and enables the concurrent observation of patterns across several variables. 
This graphic makes it clear that there is more to the relationship between pricing and the mentioned criteria than meets the eye. The lines intersect and crisscross to show how different properties with the same attributes can have quite different ratings and prices. Significant price variations can occur for listings with identical numbers of bedrooms and bathrooms, and greater prices are not invariably associated with higher ratings. These results imply that, although ratings, bathrooms, and bedrooms are significant, they are only a small portion of the greater mosaic of factors that affect pricing. As a result, we should look beyond these conventional measurements to find additional significant variables in the Airbnb market.</div>


<div style="position: relative; width: 100%; height: 100%; padding-bottom: 56.25%;">
  <iframe src="https://verkyyi.github.io/dsan5200-airbnb-story/parallel.html" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: none; width: 100%; height: 100%; overflow: hidden;"></iframe>
</div>

<div>
Plot 3's 3D scatter plot again telling the absence of a strong correlation between prices and conventional property features like bedrooms and baths. The diverse price points suggest that there are additional layers to the story.
</div>

</br>

<h2>Relationship between price with number of baths and bedrooms</h2>

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
  <iframe src="https://verkyyi.github.io/dsan5200-airbnb-story/3dscatter.html" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: none; width: 100%; height: 100%; overflow: hidden;"></iframe>
</div>

</br>

## Price distribution among neighborhoods

<div>
Knowing the popular accommodation types sets the stage for an in-depth look at the price ranges within these neighborhoods, which could influence a host's decision on where to position their price point.
The box plot underscores the variability within each neighborhood, detailing the high and low ends of pricing. Hosts can use this information to position their listing within the spectrum, considering both average rates and the range of what guests pay.
</div>

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
  <iframe src="https://verkyyi.github.io/dsan5200-airbnb-story/box.html" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: none; width: 100%; height: 100%; overflow: hidden;"></iframe>
</div>

</br>

<h2>Relationship between price with number of baths and bedrooms</h2>

<div>
To clarify the relationship between price with number of baths and bedrooms, the forth heatmap here zooms in on the majority of house types - predominantly one-bedroom and one-bathroom listings. Here, we observe that if these features were the main drivers of price, we wouldn't witness such a broad price range spanning from $0 to $1k. Instead, we'd see a concentrated cluster, implying that there must be other, less visible forces at play.
</div>

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
  <iframe src="https://verkyyi.github.io/dsan5200-airbnb-story/density.html" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: none; width: 100%; height: 100%; overflow: hidden;"></iframe>
</div>

<h2> Questions? </h2>
<div>
Above plots prompt a deeper dive into the subjective factors of guest experience. What qualities do guests actually talk about, and how do those preferences align with their willingness to pay?
</div>