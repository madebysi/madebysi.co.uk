require('dotenv').config();

module.exports = {
    siteMetadata: {
        title: 'madebySi',
        url: 'https://madebysi.co.uk'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.SPACE_ID,
                accessToken: !!process.env.IS_PREVIEW ? process.env.ACCESS_TOKEN_PREVIEW : process.env.ACCESS_TOKEN,
                host: !!process.env.IS_PREVIEW ? 'preview.contentful.com' : ''
            }
        }
    ]
};
