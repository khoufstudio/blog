/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../components/Layout'
import { Button, Navbar, Nav } from 'react-bootstrap'
import Helmet from 'react-helmet'
import { LogoKS, BackgroundLP2 } from '../assets' 

export default function index() {
  return (
    <div className="bg-dark" style={{ height: '100vh' }}>
      <Helmet>
        <title>khoufstudio</title>
      </Helmet>
      <Navbar bg="dark" variant="dark">
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
      </Navbar>
      <div className="d-flex text-white mt-5"> 
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
          <p style={{fontSize: '20px'}}>
            <strong>khoufstudio</strong> is a software house company that helps people to create a great application. 
            We can create Web, Mobile and Desktop Apps.
            Let's gets start making the good product with us! 
          </p>
          <Button className="btn btn-light"><strong>Contact Us</strong></Button>
        </div>
      </div>
      
      <p className="text-center text-white w-100" style={{position: 'absolute', bottom: 0}}>Copyright <strong>2021</strong></p>
    </div>
  )
}
