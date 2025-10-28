'use client'

import {
  Box,
  Container,
  Stack,
  Text,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  VStack,
  HStack,
  Icon,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from '@chakra-ui/react'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Contact() {
  const toast = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: 'Message sent!',
      description: "I'll get back to you as soon as possible.",
      status: 'success',
      duration: 5000,
      isClosable: true,
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
        <Stack spacing={8} align="center" textAlign="center" py={16}>
          <VStack spacing={4}>
            <Heading size="2xl" color="brand.500">
              Get In Touch
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together to bring your ideas to life.
            </Text>
          </VStack>
        </Stack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} py={16}>
          {/* Contact Form */}
          <Card>
            <CardBody>
              <VStack spacing={6} align="stretch">
                <Heading size="lg">Send me a message</Heading>
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>
                      <Input placeholder="Your name" />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input type="email" placeholder="your.email@example.com" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Subject</FormLabel>
                      <Input placeholder="What's this about?" />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        placeholder="Tell me about your project or idea..."
                        rows={6}
                      />
                    </FormControl>
                    <Button
                      type="submit"
                      colorScheme="brand"
                      size="lg"
                      w="full"
                    >
                      Send Message
                    </Button>
                  </VStack>
                </form>
              </VStack>
            </CardBody>
          </Card>

          {/* Contact Information */}
          <VStack spacing={8} align="stretch">
            <Card>
              <CardBody>
                <VStack spacing={6} align="stretch">
                  <Heading size="lg">Contact Information</Heading>
                  <VStack spacing={4} align="stretch">
                    {contactInfo.map((info, index) => (
                      <HStack key={index} spacing={4}>
                        <Icon as={info.icon} boxSize={6} color="brand.500" />
                        <VStack align="start" spacing={1}>
                          <Text fontWeight="medium">{info.title}</Text>
                          <Text
                            as="a"
                            href={info.link}
                            color="brand.500"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            {info.value}
                          </Text>
                        </VStack>
                      </HStack>
                    ))}
                  </VStack>
                </VStack>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <VStack spacing={6} align="stretch">
                  <Heading size="lg">Follow Me</Heading>
                  <HStack spacing={4} justify="center">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        as="a"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                        leftIcon={<Icon as={social.icon} />}
                        size="sm"
                      >
                        {social.name}
                      </Button>
                    ))}
                  </HStack>
                </VStack>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <VStack spacing={4} align="stretch">
                  <Heading size="md">Response Time</Heading>
                  <Text color="gray.600">
                    I typically respond to messages within 24 hours. For urgent 
                    inquiries, please call or send a direct message on LinkedIn.
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          </VStack>
        </SimpleGrid>

        {/* Call to Action */}
        <Box py={16} textAlign="center">
          <VStack spacing={6}>
            <Heading size="xl">Ready to Start Your Project?</Heading>
            <Text fontSize="lg" color="gray.600" maxW="md">
              Whether you have a specific project in mind or just want to chat about 
              possibilities, I'd love to hear from you.
            </Text>
            <Button colorScheme="brand" size="lg">
              Let's Talk
            </Button>
          </VStack>
        </Box>
      </Container>

      <Footer />
    </Box>
  )
}


