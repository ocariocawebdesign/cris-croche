import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ul>
      <li>
        {" "}
        <Link to="/" activeStyle={{ color: "#333" }}>
          {" "}
          Home{" "}
        </Link>
      </li>
      <li>
        {" "}
        <Link to="/sobre"> Sobre </Link>
      </li>
    </ul>
    <h1> Conteúdo da Home </h1>{" "}
  </Layout>
)

export default IndexPage
