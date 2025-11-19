'use client'

import {
  Box,
  Container,
  Stack,
  Text,
  Heading,
  SimpleGrid,
  Card,
  VStack,
  HStack,
  Icon,
  Field,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react'
import { toaster } from '../../components/ui/toaster'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toaster.create({
      title: 'Message sent!',
      description: "I'll get back to you as soon as possible.",
      type: 'success',
      duration: 5000,
    })
  }

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'martin@example.com',
      link: 'mailto:martin@example.com',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#',
    },
  ]

  const socialLinks = [
    {
      icon: FiLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/martin-kretzschmar',
    },
    {
      icon: FiGithub,
      name: 'GitHub',
      url: 'https://github.com/martin-kretzschmar',
    },
    {
      icon: FiTwitter,
      name: 'Twitter',
      url: 'https://twitter.com/martin_dev',
    },
  ]

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Navigation />
      
      <Container maxW="6xl" py={8} flex="1">
        {/* Hero Section */}
        <Stack gap={8} align="center" textAlign="center" py={16}>
          <VStack gap={4}>
            <Heading size="2xl" color="brand.500">
              Get In Touch
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              I&apos;m always interested in new opportunities and exciting projects.
              Let&apos;s discuss how we can work together to bring your ideas to life.
            </Text>
          </VStack>
        </Stack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} py={16}>
          {/* Contact Form */}
          <Card.Root>
            <Card.Body>
              <VStack gap={6} align="stretch">
                <Heading size="lg">Send me a message</Heading>
                <form onSubmit={handleSubmit}>
                  <VStack gap={4}>
                    <Field.Root required>
                      {/* @ts-expect-error Chakra UI v3 Field.Label types don't match runtime API */}
                      <Field.Label htmlFor="name">Name</Field.Label>
                      <Input id="name" placeholder="Your name" />
                    </Field.Root>
                    <Field.Root required>
                      {/* @ts-expect-error Chakra UI v3 Field.Label types don't match runtime API */}
                      <Field.Label htmlFor="email">Email</Field.Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </Field.Root>
                    <Field.Root>
                      {/* @ts-expect-error Chakra UI v3 Field.Label types don't match runtime API */}
                      <Field.Label htmlFor="subject">Subject</Field.Label>
                      <Input id="subject" placeholder="What&apos;s this about?" />
                    </Field.Root>
                    <Field.Root required>
                      {/* @ts-expect-error Chakra UI v3 Field.Label types don't match runtime API */}
                      <Field.Label htmlFor="message">Message</Field.Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project or idea..."
                        rows={6}
                      />
                    </Field.Root>
                    <Button
                      type="submit"
                      colorPalette="brand"
                      size="lg"
                      w="full"
                    >
                      Send Message
                    </Button>
                  </VStack>
                </form>
              </VStack>
            </Card.Body>
          </Card.Root>

          {/* Contact Information */}
          <VStack gap={8} align="stretch">
            <Card.Root>
              <Card.Body>
                <VStack gap={6} align="stretch">
                  <Heading size="lg">Contact Information</Heading>
                  <VStack gap={4} align="stretch">
                    {contactInfo.map((info, index) => (
                      <HStack key={index} gap={4}>
                        <Icon as={info.icon} boxSize={6} color="brand.500" />
                        <VStack align="start" gap={1}>
                          <Text fontWeight="medium">{info.title}</Text>
                          <Text
                            asChild
                            color="brand.500"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            <a href={info.link}>{info.value}</a>
                          </Text>
                        </VStack>
                      </HStack>
                    ))}
                  </VStack>
                </VStack>
              </Card.Body>
            </Card.Root>

            <Card.Root>
              <Card.Body>
                <VStack gap={6} align="stretch">
                  <Heading size="lg">Follow Me</Heading>
                  <HStack gap={4} justify="center">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        asChild
                        variant="outline"
                        size="sm"
                      >
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon as={social.icon} />
                          {social.name}
                        </a>
                      </Button>
                    ))}
                  </HStack>
                </VStack>
              </Card.Body>
            </Card.Root>

            <Card.Root>
              <Card.Body>
                <VStack gap={4} align="stretch">
                  <Heading size="md">Response Time</Heading>
                  <Text color="gray.600">
                    I typically respond to messages within 24 hours. For urgent
                    inquiries, please call or send a direct message on LinkedIn.
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>
          </VStack>
        </SimpleGrid>

        {/* Call to Action */}
        <Box py={16} textAlign="center">
          <VStack gap={6}>
            <Heading size="xl">Ready to Start Your Project?</Heading>
            <Text fontSize="lg" color="gray.600" maxW="md">
              Whether you have a specific project in mind or just want to chat about
              possibilities, I&apos;d love to hear from you.
            </Text>
            <Button colorPalette="brand" size="lg">
              Let&apos;s Talk
            </Button>
          </VStack>
        </Box>
      </Container>

      <Footer />
    </Box>
  )
}
