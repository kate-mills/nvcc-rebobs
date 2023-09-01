import React from 'react'

const Seo = ({location, params, data, pageContext = {}}) => {
  console.log(pageContext, location)

  const {title, description, image} = pageContext
  const siteUrl = `https://nvcc-rebobs.netlify.app/`
  const defaultTitle = 'Napa Valley Composite Cycling'
  const defaultDescription = 'Napa Valley Composite Cycling Team is a NICA affiliated, middle and high-school age (6-12 grade) mountain bike team. Whether you are a beginner, or have been racing before, our team would love to have you join us as we compete against highschools from around California.'
  /*const defaultImage = `${siteUrl}w-image.jpg`*/

  return (
    <>
      <title>{title || defaultTitle}</title>
      <meta name="og:title" content={title || defaultTitle} />
      <meta name="description" content={description || defaultDescription} />
      <meta name="og:description" content={description || defaultDescription} />
      <meta name="twitter:url" content={`${siteUrl}${location.pathname}`} />
      {image && <meta name="og:image" content={image} />}
    </>
  )
}
export default Seo
