import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import CarLoader from '../../components/homepage/car-loader'
import React from 'react'

const LazyCar = dynamic(() => import('../car'), {
  ssr: false,
  loading: () => <CarLoader></CarLoader>
})

const Main = ({ children }) => {
  return (
    <>
      <Box as="main" pb={8}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Bugatti Website" />
          <meta name="author" content="Mihaela Vlad" />
          <meta name="og:title" content="Mihaela Vlad" />
          <meta property="og:type" content="website" />
          <title>Mihaela Vlad - Bugatti Project</title>
        </Head>

        <Container maxW="container.md" pt={2}>
          <LazyCar></LazyCar>

          {children}
        </Container>
      </Box>
    </>
  )
}

export default Main
