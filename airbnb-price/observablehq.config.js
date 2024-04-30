// See https://observablehq.com/framework/config for documentation.
export default {
  // The project’s title; used in the sidebar and webpage titles.
  title: "Airbnb Price in DC",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  pages: [
    {
      name: "Index",
      pages: [
        { name: "Overview", path: "/index" },
        { name: "Exploratory Data By Plots", path: "/plots" },
        { name: "Key Feature Analysis", path: "/price_across_neighborhood" },
        { name: "Price Explore Map", path: "/local_map" },
        { name: "Conclusions", path: "/conclusions" },
        { name: "References", path: "/references" },
      ]
    }
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',

  // Some additional configuration options and their defaults:
  theme: "default", // try "light", "dark", "slate", etc.
  header: "", // what to show in the header (HTML)
  footer: "", // what to show in the footer (HTML)
  toc: false, // whether to show the table of contents
  pager: false, // whether to show previous & next links in the footer
  root: "docs", // path to the source root for preview
  output: "dist", // path to the output root for build
  search: false, // activate search
  sidebar: true,
};
