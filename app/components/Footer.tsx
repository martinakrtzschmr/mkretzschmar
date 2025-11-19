'use client'

import {
  Box,
  Container,
  Stack,
  Text,
  Link,
} from '@chakra-ui/react'
import { useColorModeValue } from '../../components/ui/color-mode'

export default function Footer() {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.700', 'gray.200')

  return (
    <Box bg={bgColor} color={textColor}>
      <Container
        maxW={'6xl'}
        py={4}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          gap={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© 2024 Martin Kretzschmar. All rights reserved.</Text>
          <Stack direction={'row'} gap={6}>
            <Link href={'https://github.com'} target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
            <Link href={'https://linkedin.com'} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
            <Link href={'https://twitter.com'} target="_blank" rel="noopener noreferrer">
              Twitter
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
