import React from 'react'

const Seo = ({ location, params, data, pageContext = {} }) => {
  const canonicalUrl = `https://www.napavalleycompositecycling.com`
  const { title="", description="", image } = pageContext

  const defaultTitle = `Napa Valley Composite Cycling Team | Napa, CA`

  const seo = {
    title: !title ? defaultTitle : `${title} | ${defaultTitle}`,
    img: image || `${canonicalUrl}/team-photo.webp`,
    canonical: `${canonicalUrl}${location.pathname}`,
    description:
      description ||
      'Napa Valley Composite Cycling Team is a NICA affiliated, high-school age XC MTB team. Whether you are a beginner, or have been racing before, our team would love to have you join us as we compete against highschools from around California. Students from ALL Napa High Schools are welcome to join!',
  }

  const baseSchema = [
    {
      "@context" : "https://schema.org",
        "@type" : "SportsTeam",
         name: "Napa Valley Composite Cycling Team",
         url: 'https://www.napavalleycompositecycling.com/',
         alternateName: 'The Rebobs',
         sport: 'XC MTB',
         memberOf: [ { '@type': 'SportsOrganization', name: 'NICA' } ],
    }
  ]
  return (
    <>
      <meta name="description" content={seo.description} />
      <title>{seo.title}</title>

      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={seo.img} />
      <meta property="og:url" content={seo.canonicalUrl} />
      <meta property="og:description" content={seo.description} />

      <meta name="og:locale" content="en_US" />
      <meta name="og:site_name" content="Napa Valley Composite Cycling Team" />

      <meta name="fb_admins_meta_tag" content="napavalleycompositecycling" />
      <meta name="keywords" content="Cycling, XC MTB, NICA" />
      <meta property="fb:admins" content="napavalleycompositecycling" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.canonicalUrl} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <link rel="canonical" href={seo.canonical}/>

      <script type="application/ld+json">
        {JSON.stringify(baseSchema) }
      </script>
    </>
  )
}
export default Seo
