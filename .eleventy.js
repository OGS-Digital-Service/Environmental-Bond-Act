module.exports = function(eleventyConfig){
    eleventyConfig.setTemplateFormats([
        "md",
        "njk"
      ]);

      eleventyConfig.addPassthroughCopy("img");
      eleventyConfig.addPassthroughCopy("fonts");
      eleventyConfig.addPassthroughCopy("js");
      eleventyConfig.addPassthroughCopy("css");
      eleventyConfig.addPassthroughCopy("pdf");

    return {
        markdownTemplateEngine: "njk",    
    dir: {
        layouts: "_layouts"

    }
    }
};