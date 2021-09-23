import React from "react"
import { Container, Navbar } from "react-bootstrap"
import './index.scss'
import { Helmet } from 'react-helmet'
import { LogoKS } from '../../assets'

export default function Layout({ children, title }) {
  return (
    <>
      <Helmet>
        <title>{process.env.TITLE} - {title}</title>
      </Helmet>
      <Navbar bg="primary" sticky="top" height="60">
        <Container>
          <Navbar.Brand href="/" className="text-white">
						<img
              alt="khoufstudio_logo"
							src={ LogoKS }
							className="mr-3"
							width="23"/>
						khoufstudio - <strong>Blog</strong>
					</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="px-3 px-md-0 mb-5 pb-5" style={{minHeight: "800px"}}>
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
