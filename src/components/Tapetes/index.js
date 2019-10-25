/*import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Tapetes = () => {
  const { tapeteImage } = useStaticQuery(
    graphql`
      query {
        tapeteImage: file(relativePath: { eq: "tapete01.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 120, maxHeight: 130) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }s
    `
  )
  return (
    <Img fluid={tapeteImage.childImageSharp.fluid} style={{ width: "120px" }} />
  )
}

export default Tapetes
*/