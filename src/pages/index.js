/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../components/Layout'
import { Button, Navbar, Nav, Container } from 'react-bootstrap'
import Helmet from 'react-helmet'
import { LogoKS, BackgroundLP2 } from '../assets' 

export default function index() {
  return (
    <div className="bg-dark" style={{ height: '100vh', backgroundImage: 'linear-gradient(347deg, #201d2b, #858585e3)' }}>
      <Helmet>
        <title>khoufstudio</title>
      </Helmet>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={LogoKS}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <strong>
              khoufstudio
            </strong>
          </Navbar.Brand>
           <Nav className="ml-auto">
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <div className="d-flex text-white mt-5 pt-5"> 
          <img
            alt=""
            src={BackgroundLP2}
            className="mx-4 px-4"
            style={{width: '600px'}}
          />
          <div className="text-justify mx-5 px-5">
            <h2 className="mb-4">
              Who are we?
            </h2>
            <p className="text-justify" style={{fontSize: '16px'}}>
              <strong>khoufstudio</strong> is a software house company that helps people to create a great application. 
              We can create Web, Mobile and Desktop Apps.
              Let's gets start making the good product with us! 
            </p>
            <Button className="btn btn-light mt-3"><strong>Contact Us</strong></Button>
          </div>
        </div>
        
        <div className="position-absolute text-center" style={{ bottom: 0, left: 0, right: 0}}>
          <p className="text-white">Copyright <strong>2021</strong></p>
        </div>
      </Container>
    </div>
  )
}
