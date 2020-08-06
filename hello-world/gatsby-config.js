/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 module.exports = {
	 siteMetadata: {
    title: `Faith Ang | Portfolio`,
  }, //siteMetadata
   plugins: [
     {
       resolve: "gatsby-source-filesystem",
       options: {
         name: "fonts",
         path: `${__dirname}/src/fonts/`
       },
     },
   ] // plugins
 };
