'use client'

import {
  Box,
  Container,
  Stack,
  Text,
  Heading,
  Card,
  CardBody,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
  useToast,
  Divider,
} from '@chakra-ui/react'
import { useState } from 'react'
import { signIn } from '../../lib/supabase/auth-helpers'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const toast = useToast()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { data, error } = await signIn(email, password)
      
      if (error) {
        toast({
          title: 'Error',
          description: error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      } else {
        toast({
          title: 'Success',
          description: 'Welcome back!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        router.push('/')
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg="gray.50">
      <Container maxW="md">
        <Card>
          <CardBody>
            <VStack spacing={8}>
              <VStack spacing={4} textAlign="center">
                <Heading size="xl" color="brand.500">
                  Welcome Back
                </Heading>
                <Text color="gray.600">
                  Sign in to your account to continue
                </Text>
              </VStack>

              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <VStack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </FormControl>
                  
                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    colorScheme="brand"
                    size="lg"
                    w="full"
                    isLoading={loading}
                    loadingText="Signing in..."
                  >
                    Sign In
                  </Button>
                </VStack>
              </form>

              <Divider />

              <VStack spacing={4} w="full">
                <Text fontSize="sm" color="gray.600">
                  Don't have an account?{' '}
                  <Link href="/signup" color="brand.500" fontWeight="medium">
                    Sign up
                  </Link>
                </Text>
                <Link href="/forgot-password" color="brand.500" fontSize="sm">
                  Forgot your password?
                </Link>
              </VStack>
            </VStack>
          </CardBody>
        </Card>
      </Container>
    </Box>
  )
}
