module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return dateObj.toDateString();
  });

  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
