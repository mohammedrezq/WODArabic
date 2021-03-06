import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
const SEO = ({children, location, description, title, image}) => {
    const {site} = useStaticQuery(graphql`
        query {
            site{
                siteMetadata {
                    title
                    description
                    twitter
                }
            }
        }
    `)
    return (
        <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
            {/* <html lang="en" /> */}
            <html lang="ar" />
            <title>{title}</title>
            {/* Fav Icons */}
            <link rel="icon" type="img/svg+xml" href="/static/favicon.svg" />
            <link rel="alternate icon" href="/static/favicon.ico" />
            {/* Meta */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            <meta name="description" content={site.siteMetadata.description}/>
            {/* Open Graph */}
            {location && <meta property="og:url" content={location.href} />}
            <meta property="og:image" content={image || '/logo.svg'} />
            <meta property="og:title" content={title} key="ogtitle" />
            <meta property="og:site_name" content={site.siteMetadata.title} key="ogsitename" />
            <meta property="og:description" content={description} key="ogdescription" />
            <meta name="google-site-verification" content="ZfSmjcVtt2Z1Cuwp1I2TaGaCCmoqCoHwQYYRck1nXeQ" />
            {children}
        </Helmet>
    )
}

export default SEO
