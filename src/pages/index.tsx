import React from  'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {

  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
        <h1>Crptotoday</h1>
        <p>Currency of all crypto coins</p>
    </Container>
  )
}

export default Home
