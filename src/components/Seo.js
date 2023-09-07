import React from 'react'

const Seo = ({ location, params, data, pageContext = {} }) => {
  const baseUrl = `https://nvcc-rebobs.netlify.app/`
  const canonicalUrl = `https://www.napavalleycompositecycling.com/`

  const { title="", description="", image } = pageContext

  const seo = { 
    title: `${title} | Napa, CA | Napa Valley Composite Cycling Team`,
    img: image || `${baseUrl}team-photo.webp`,
    canonical: `${canonicalUrl}${location.pathname}`,
    url: `${baseUrl}${location.pathname}`,
    description:
      description ||
      'Napa Valley Composite Cycling Team is a NICA affiliated, high-school age MTB team. Whether you are a beginner, or have been racing before, our team would love to have you join us as we compete against highschools from around California. Students from ALL Napa High Schools are welcome to join!',
  }

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
      <meta name="og:site_name" content="Napa Valley Composite" />

      <meta name="fb_admins_meta_tag" content="napavalleycompositecycling" />
      <meta name="keywords" content="Cycling, MTB, NICA" />
      <meta property="fb:admins" content="napavalleycompositecycling" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.canonicalUrl} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <link rel="canonical" href={seo.canonical}/>
    </>
  )
}
export default Seo
