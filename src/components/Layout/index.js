import React from "react"
import PropTypes from "prop-types"
import Perfil from "../Perfil"
import Header from "../Header"
import Footer from "../Footer"
import Logo from "../Logo"
import styled from "styled-components"
import { Link } from "gatsby"

const LayoutContainer = styled.section`
  background: rgba(0, 0, 0, 0)
    linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87)) repeat scroll
    0% 0%;
  box-shadow: rgba(0, 0, 0, 0.17) 0px 2px 20px;
  box-sizing: border-box;
  display: flex;
`

const LayoutMain = styled.main`
  background: rgba(0, 0, 0, 0)
    linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87)) repeat scroll
    0% 0%;
  box-shadow: rgba(0, 0, 0, 0.17) 0px 2px 20px;
  min-height: 100vh;
  padding: 2rem;
  width: 100%;
  text-align: center;
`
const ContainerHeader = styled.header`
  display: grid;
  grid-template-columns:100%;
  border:1px solid #FAFAFA;
  border-radius:1px;
  margin-left: auto;
  margin-right: auto;
  width: 6em;
  padding:2rem;
`
//<p> tag with some styles
const PerfilParagraph = styled.p`
  font-size: 1em;
  text-align: left;
  color: palevioletred;
`

//<seção do perfil> tag with some styles
const PerfilWrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  margin-top: 1rem;
  border: 2px solid #fafafa;
  border-radius: 4px;
`

//menu

const MenuHeader = styled.nav`
  display: flex;
  font-size: 16;
  font-weight: bold;
  color: #fafafa;
  text-align: center;
  background: rgba(0, 0, 0, 0)
    linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87)) repeat scroll
    0% 0%;
  margin-bottom: 1rem;
  text-decoration: none;
  list-style-type: none;
`

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <LayoutMain>
        <Header />
        <MenuHeader>
          <nav>
            <ul>
              <li>
                {" "}
                <Link to="/" activeStyle={{ color: "#333" }}>
                  {" "}
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre"> Sobre </Link>
              </li>
            </ul>
          </nav>
        </MenuHeader>
        <ContainerHeader>
          <Logo />
        </ContainerHeader>
        <PerfilWrapper>
          <PerfilParagraph>
            <Perfil />
            {children}
          </PerfilParagraph>
        </PerfilWrapper>
        <Footer />
      </LayoutMain>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
