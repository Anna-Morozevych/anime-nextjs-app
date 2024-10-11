import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

export default function loading() {
  return (
    <Box p={4}>
      <Heading as='h1' size='xl'>
        Loading...
      </Heading>
    </Box>
  )
}
