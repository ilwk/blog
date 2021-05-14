module.exports = {
  siteMetadata: {
    title: "blog",
    author: "vg-land",
    description: `My site description...`,
    siteUrl: `https://vg-land.github.io`,
    social: [
      {
        name: `GitHub`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-theme-blog`,
      options: {
        /*
        - basePath defaults to `/`
        */
        // basePath: `/blog`,
        prismPreset: `dracula`,
        // preset: `my-preset-name-here`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
