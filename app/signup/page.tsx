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
import { signUp } from '../../lib/supabase/auth-helpers'
import { useRouter } from 'next/navigation'
import { toaster } from '../../components/ui/toaster'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toaster.create({
        title: 'Error',
        description: 'Passwords do not match',
        type: 'error',
        duration: 5000,
      })
      return
    }

    setLoading(true)

    try {
      const { error } = await signUp(email, password, {
        full_name: email.split('@')[0], // Use email prefix as default name
      })

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
          description: 'Check your email for a confirmation link!',
          type: 'success',
          duration: 5000,
        })
        router.push('/login')
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
                  Create Account
                </Heading>
                <Text color="gray.600">
                  Sign up to get started with your portfolio
                </Text>
              </VStack>

              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <VStack gap={4}>
                  <Field.Root required>
                    {/* @ts-expect-error Chakra UI v3 Field.Label types don't match runtime API */}
                    <Field.Label htmlFor="signup-email">Email</Field.Label>
                    <Input
                      id="signup-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </Field.Root>

                  <Field.Root required>
                    {/* @ts-expect-error Chakra UI v3 Field.Label types don't match runtime API */}
                    <Field.Label htmlFor="signup-password">Password</Field.Label>
                    <Input
                      id="signup-password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a password"
                    />
                  </Field.Root>

                  <Field.Root required>
                    {/* @ts-expect-error Chakra UI v3 Field.Label types don't match runtime API */}
                    <Field.Label htmlFor="signup-confirm">Confirm Password</Field.Label>
                    <Input
                      id="signup-confirm"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm your password"
                    />
                  </Field.Root>

                  <Button
                    type="submit"
                    colorPalette="brand"
                    size="lg"
                    w="full"
                    loading={loading}
                    loadingText="Creating account..."
                  >
                    Sign Up
                  </Button>
                </VStack>
              </form>

              <Separator />

              <VStack gap={4} w="full">
                <Text fontSize="sm" color="gray.600">
                  Already have an account?{' '}
                  <Link href="/login" color="brand.500" fontWeight="medium">
                    Sign in
                  </Link>
                </Text>
              </VStack>
            </VStack>
          </Card.Body>
        </Card.Root>
      </Container>
    </Box>
  )
}
