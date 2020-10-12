/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
   plugins: [`gatsby-plugin-styled-components`, {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `raleway`,
        `source sans pro\:300,400,400i,700`
      ],
      display: 'swap'
    }
  }],
}
