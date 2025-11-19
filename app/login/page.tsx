'use client'

import {
  Box,
  Container,
  Text,
  Heading,
  Card,
  VStack,
  Field,
  Input,
  Button,
  Link,
  Separator,
} from '@chakra-ui/react'
import { useState } from 'react'
import { signIn } from '../../lib/supabase/auth-helpers'
import { useRouter } from 'next/navigation'
import { toaster } from '../../components/ui/toaster'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await signIn(email, password)

      if (error) {
        toaster.create({
          title: 'Error',
          description: error.message,
          type: 'error',
          duration: 5000,
        })
      } else {
        toaster.create({
          title: 'Success',
          description: 'Welcome back!',
          type: 'success',
          duration: 3000,
        })
        router.push('/')
      }
    } catch {
      toaster.create({
        title: 'Error',
        description: 'An unexpected error occurred',
        type: 'error',
        duration: 5000,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg="gray.50">
      <Container maxW="md">
        <Card.Root>
          <Card.Body>
            <VStack gap={8}>
              <VStack gap={4} textAlign="center">
                <Heading size="xl" color="brand.500">
                  Welcome Back
                </Heading>
                <Text color="gray.600">
                  Sign in to your account to continue
                </Text>
              </VStack>

              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <VStack gap={4}>
                  <Field.Root required>
                    {/* @ts-expect-error Chakra UI v3 Field.Label types don't match runtime API */}
                    <Field.Label htmlFor="login-email">Email</Field.Label>
                    <Input
                      id="login-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </Field.Root>

                  <Field.Root required>
                    {/* @ts-expect-error Chakra UI v3 Field.Label types don't match runtime API */}
                    <Field.Label htmlFor="login-password">Password</Field.Label>
                    <Input
                      id="login-password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                    />
                  </Field.Root>

                  <Button
                    type="submit"
                    colorPalette="brand"
                    size="lg"
                    w="full"
                    loading={loading}
                    loadingText="Signing in..."
                  >
                    Sign In
                  </Button>
                </VStack>
              </form>

              <Separator />

              <VStack gap={4} w="full">
                <Text fontSize="sm" color="gray.600">
                  Don&apos;t have an account?{' '}
                  <Link href="/signup" color="brand.500" fontWeight="medium">
                    Sign up
                  </Link>
                </Text>
                <Link href="/forgot-password" color="brand.500" fontSize="sm">
                  Forgot your password?
                </Link>
              </VStack>
            </VStack>
          </Card.Body>
        </Card.Root>
      </Container>
    </Box>
  )
}
