module.exports = {
  siteMetadata: {
    title: "تطوير الويب",
    siteUrl: "https://www.webmasteronlinedev.com",
    description:
      "موقع تطوير الويب يقدم محتوى وخدمات  للمهتمين بمجال الويب وتطبيقات الويب وتطبيقات الهواتف الذكية",
    author: "محمد رزق",
    twitter: "@mohammedrezq2",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-7KX53V3V9G",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
        name: `Webmaster Online Development`,
        short_name: `WOD`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#000000`,
        display: `standalone`,
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/static/*", "/blog/*", "/blog"],
      },
    },
    // "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-external-links`,
            // options: {
            //   target: "_blank",
            //   rel: "nofollow"
            // }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },

    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
      __key: "pages",
    },
  ],
};
