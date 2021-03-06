import React from 'react';
import Helmet from 'react-helmet';
import components from '../components';
import DebugData from '../components/debug-data';
import Grid from '../components/grid';
import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
    opacity: 0;
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
    overflow: hidden;
`;

export default ({
    location,
    data: {
        site: {
            siteMetadata
        },
        settings,
        page
    },
    transition
}) => {
    const siteURL = siteMetadata.url;
    const title = page.title ? `${settings.title} / ${page.title}` : settings.title;
    const description = (page.description && page.description.description) || settings.description.description;
    const image = (page.image && page.image.file.url) || settings.image.file.url;
    const favicon = settings.favicon.file.url;

    return (
        <Main style={transition && transition.style}>
            <Helmet title={title}>
                <html lang="en" />

                <meta name="description" content={description} />
                <meta name="image" content={image} />

                <meta property="og:url" content={siteURL} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content={settings.twitterHandle}/>
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />

                <link rel="sitemap" type="application/xml" href="/sitemap.xml"/>

                <link rel="apple-touch-icon" sizes="180x180" href={`${favicon}?w=180`}/>
                <link rel="icon" type="image/png" sizes="192x192" href={`${favicon}?w=192`}/>
                <link rel="icon" type="image/png" sizes="32x32" href={`${favicon}?w=32`}/>
            </Helmet>
            {process.env.NODE_ENV === 'development' ? (
                <DebugData
                    id={page.id}
                    site={siteMetadata}
                    location={location}
                    seo={page.seo}
                    modules={page.modules}
                />
            ) : null}
            {page.modules.map(m => {
                const type = m.type.replace('Contentful', '');
                const Module = components[type];
                if (!Module) {
                    return null;
                }

                return (
                    <Section id={m.id} data-component={type} key={type + m.id}>
                        <Module {...m} page={page} dark={!page.headerTextColor}/>
                    </Section>
                );
            })}
            {process.env.NODE_ENV === 'development' && (
                <Grid show/>
            )}
        </Main>
    );
};

export const query = graphql`
query PageQuery($id: String!) {
  site {
    siteMetadata {
      title
      url
    }
  }
  settings: contentfulSettings {
    title
    description
    image {
      ...ImageFragment
    }
    favicon {
      ...ImageFragment
    }
  }
  page: contentfulPage(id: {eq: $id}) {
    id
    slug
    title
    headerTextColor
    modules {
      type: __typename
      ... on ContentfulIntro {
        id
        intro {
          childMarkdownRemark {
            html
          }
        }
        links {
          pages {
            id
            title
            slug
            hoverMedia {
              ...VideoFragment
            }
          }
        }
      }
      ... on ContentfulAbout {
        id
        intro {
          childMarkdownRemark {
            html
          }
        }
        text {
          childMarkdownRemark {
            html
          }
        }
      }
      ... on ContentfulTitleBlock {
        id
        title
        subTitle
        heroMedia {
          ...VideoFragment
        }
        tint
      }
      ... on ContentfulImageBlock {
        id
        image {
          ...ImageFragment
        }
      }
      ... on ContentfulTextBlock {
        id
        title
        text {
          childMarkdownRemark {
            html
          }
        }
        secondaryText {
          childMarkdownRemark {
            html
          }
        }
      }
      ... on ContentfulGallery {
        id
        images {
          ...ImageFragment
        }
      }
      ... on ContentfulVideoBlock {
        id
        video {
          ...VideoFragment
        }
        autoLoop
      }
      ... on ContentfulStatsBlock {
        id
        stats {
          name
          value
        }
      }
      ... on ContentfulWorkLinks {
        pages {
          id
          title
          slug
          hoverMedia {
            ...VideoFragment
          }
        }
      }
    }
  }
}

fragment ImageFragment on ContentfulAsset {
  id
  title
  description
  resolutions {
    aspectRatio
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
  file {
    url
    fileName
    contentType
  }
  sizes(quality: 100) {
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
  resize {
    src
    width
    height
    aspectRatio
  }
}

fragment VideoFragment on ContentfulAsset {
  id
  title
  description
  file {
    url
    fileName
    contentType
  }
}
`;
