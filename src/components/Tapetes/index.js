import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Tapetes = () => {
  const { tapeteImage } = useStaticQuery(
    graphql`
      query {
        tapeteImage: file(relativePath: { eq: "tapete01.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 320, maxHeight: 330) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <Img fluid={tapeteImage.childImageSharp.fluid} style={{ width: "180px" }} />
  )
}

export default Tapetes
