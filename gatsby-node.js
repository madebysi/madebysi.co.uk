require('isomorphic-fetch');
const path = require('path');
const fs = require('fs');
const sitemap = require('sitemap');

exports.createPages = ({graphql, boundActionCreators}) => {
    const {createPage} = boundActionCreators;

    return new Promise(resolve => {
        graphql(`
            {
              pages: allContentfulPage {
                edges {
                  node {
                    id
                    slug
                  }
                }
              }
            }
            `)
            .then(result => result.data)
            .then(data => {
                const pages = data.pages.edges.map(edge => edge.node);

                pages.map(page => {
                    console.log('\n=> createPage', `/${page.slug || ''}`);
                    // console.log('=>', JSON.stringify(page, null, 2));
                    return createPage({
                        path: `/${page.slug || ''}/`.replace('//', '/'),
                        component: path.resolve('./src/templates/index.js'),
                        context: {
                            id: page.id
                        }
                    });
                });

                return pages;
            })
            .then(pages => {
                if (process.env.NODE_ENV === 'production') {
                    return generateSiteMap(pages.map(p => p.slug || ''));
                }
                return pages;
            })
            .then(pages => {
                if (process.env.NODE_ENV === 'production' && process.env.CIRCLE_BRANCH === 'develop') {
                    return generateRobotsTxt();
                }
                return pages;
            })
            .then(() => resolve());
    });
};

function generateSiteMap(urls) {
    return new Promise(resolve => {
        console.log('Generating sitemap.xml');
        const sm = sitemap.createSitemap({
            hostname: 'https://madebysi.co.uk',
            cacheTime: '60000',
            urls: urls
                .map(url => ({
                    url: url,
                    changefreq: 'daily',
                    priority: url ? 0.7 : 0.9
                }))
        });
        fs.writeFile(`${__dirname}/public/sitemap.xml`, sm.toString(), 'utf8', err => {
            if (err) {
                throw err;
            }
            resolve();
        });
    });
}

function generateRobotsTxt() {
    const txt = 'User-agent: *\nDisallow: /';
    return new Promise(resolve => {
        console.log('Generating robots.txt');
        fs.writeFile(`${__dirname}/public/robots.txt`, txt, 'utf8', err => {
            if (err) {
                throw err;
            }
            resolve();
        });
    });
}
