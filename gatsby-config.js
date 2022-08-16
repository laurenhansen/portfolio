require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Lauren N. Hansen`,
    siteUrl: `https://www.yourdomain.tld`,
    message: ``,
    url: ``,
    project: ``,
    headline: ``,
    basePath: ``,
    name: ``,
    version: ``,
    developer: ``,
    coauthorBusiness: ``,
  },
  plugins: [
    "gatsby-plugin-sass", {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "G-BH6CKPZYPS"
      }
  }, 
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    "gatsby-plugin-mdx", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
  }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: `portfolio`,
      path: `${__dirname}/portfolio/`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, 
  {
    resolve: "gatsby-plugin-web-font-loader",
    options: {
      typekit: {
        id: process.env.TYPEKIT_ID,
      },
    },
  },
  {
    resolve: 'gatsby-plugin-html-attributes',
    options: {
      lang: 'en'
    }
  },
  "gatsby-plugin-mdx", 
],
};