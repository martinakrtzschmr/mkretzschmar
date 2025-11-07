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
import { signUp } from '../../lib/supabase/auth-helpers'
import { useRouter } from 'next/navigation'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const toast = useToast()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {
      toast({
        title: 'Error',
        description: 'Passwords do not match',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      return
    }

    setLoading(true)

    try {
      const { data, error } = await signUp(email, password, {
        full_name: email.split('@')[0], // Use email prefix as default name
      })
      
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
          description: 'Check your email for a confirmation link!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        router.push('/login')
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
                  Create Account
                </Heading>
                <Text color="gray.600">
                  Sign up to get started with your portfolio
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
                      placeholder="Create a password"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm your password"
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    colorScheme="brand"
                    size="lg"
                    w="full"
                    isLoading={loading}
                    loadingText="Creating account..."
                  >
                    Sign Up
                  </Button>
                </VStack>
              </form>

              <Divider />

              <VStack spacing={4} w="full">
                <Text fontSize="sm" color="gray.600">
                  Already have an account?{' '}
                  <Link href="/login" color="brand.500" fontWeight="medium">
                    Sign in
                  </Link>
                </Text>
              </VStack>
            </VStack>
          </CardBody>
        </Card>
      </Container>
    </Box>
  )
}
