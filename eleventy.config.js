// Eleventy configuration: where the pages are, where the built site goes,
// and which files are copied into the site unchanged.

export default function (eleventyConfig) {
  // The design system stays in design/ as the single source.
  // These lines copy it into the built site under /assets/.
  eleventyConfig.addPassthroughCopy({
    "design/tokens.css": "assets/tokens.css",
    "design/components/components.css": "assets/components.css",
    "design/logos/*.svg": "assets/logos",
    "src/assets": "assets",
    CNAME: "CNAME",
  });

  // Finds the page with a given shared key in a given language.
  // The language toggle and the hreflang links use it to pair pages
  // such as /tr/yayinlar/ and /en/publications/.
  eleventyConfig.addFilter("pageFor", (pages, key, lang) =>
    pages.find((p) => p.data.key === key && p.data.lang === lang)
  );

  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
