/* eslint-disable no-unused-vars */
import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Button from 'react-bootstrap/Button'

export default function notFound() {
  return (
    <>
      <Helmet>
        <title>Halaman tidak ditemukan</title>
      </Helmet>
      <div class="text-center"> 
        <div style={{ fontSize: "200px", fontWeight: "bold" }}>
          404 :(
        </div>
        <p>Halaman tidak ditemukan!</p>
        <Button 
          variant="primary"
          href="/"
        >
          Kembali ke Halaman Utama
        </Button>
      </div>
    </>
  )
}
