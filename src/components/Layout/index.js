import React from "react"
import { Container, Button, Navbar } from "react-bootstrap"
import { graphql, Link } from 'gatsby'
import './index.scss'
import { Helmet } from 'react-helmet'
import { LogoKS } from '../../assets'

export default function Layout({ children, title }) {
  return (
    <>
      <Helmet>
        <title>khoufstudio - {title}</title>
      </Helmet>
      <Navbar bg="primary" sticky="top" height="60">
        <Container>
          <Navbar.Brand href="/" className="text-white">
						<img
							src={ LogoKS }
							className="mr-3"
							width="23"/>
						khoufstudio - <strong>Blog</strong>
					</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="p-0 pb-4" style={{minHeight: "800px"}}>
				{ children }
      </Container>
			<footer className="bg-primary" style={{height: "70px"}}>
				<Container className="d-flex justify-content-center align-items-center h-100">
					<p className="text-center m-0 text-white">This blog is made using <strong>Gatsby.js</strong></p>
				</Container>
			</footer>
    </>
  )
}
