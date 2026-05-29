import React from 'react'
import { Helmet } from 'react-helmet-async'
import siteMeta from '../constants/seo'

export default function Seo({ title, description, path = '/', image, additionalSchema = [] }) {
  const pageTitle = title ? `${title} | ${siteMeta.siteName}` : `${siteMeta.siteName}`
  const pageDescription = description || siteMeta.description
  const canonicalUrl = `${siteMeta.siteUrl}${path === '/' ? '' : path}`
  const shareImage = image || siteMeta.image
  const schemaItems = [siteMeta.localBusinessSchema, siteMeta.personSchema, ...additionalSchema].filter(Boolean)

  return (
    <Helmet>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />

      <meta name="theme-color" content="#050505" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteMeta.siteName} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={shareImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={shareImage} />
      <meta name="twitter:site" content={siteMeta.twitterHandle} />
      <meta name="twitter:creator" content={siteMeta.twitterHandle} />

      {schemaItems.map((schema, index) => (
        <script key={index} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  )
}
