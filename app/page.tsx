'use client'

import {
  Box,
  Container,
  Stack,
  Text,
  Heading,
  Button,
  SimpleGrid,
  Card,
  Badge,
  Avatar,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react'
import { FiGithub, FiExternalLink, FiMail } from 'react-icons/fi'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function Home() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      technologies: ['Next.js', 'Supabase', 'TypeScript'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather data visualization with charts',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
      githubUrl: '#',
      liveUrl: '#',
    },
  ]

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Navigation />
      
      <Container maxW="6xl" py={8} flex="1">
        {/* Hero Section */}
        <Stack gap={8} align="center" textAlign="center" py={16}>
          <Avatar.Root size="2xl" name="Martin Kretzschmar" src="https://avatars.dicebear.com/api/male/martin.svg" />
          <VStack gap={4}>
            <Heading size="2xl" color="brand.500">
              Martin Kretzschmar
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl">
              Full-Stack Developer passionate about creating innovative web applications
              with modern technologies and clean code.
            </Text>
            <HStack gap={4}>
              <Button colorPalette="brand" size="lg">
                View My Work
              </Button>
              <Button variant="outline" size="lg">
                <FiMail />
                Contact Me
              </Button>
            </HStack>
          </VStack>
        </Stack>

        {/* Skills Section */}
        <Box py={16}>
          <Heading size="xl" textAlign="center" mb={8}>
            Skills &amp; Technologies
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={4}>
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase', 'Python', 'Docker'].map((skill) => (
              <Card.Root key={skill}>
                <Card.Body textAlign="center">
                  <Text fontWeight="bold">{skill}</Text>
                </Card.Body>
              </Card.Root>
            ))}
          </SimpleGrid>
        </Box>

        {/* Featured Projects */}
        <Box py={16}>
          <Heading size="xl" textAlign="center" mb={8}>
            Featured Projects
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
            {projects.map((project, index) => (
              <Card.Root key={index} h="full">
                <Card.Header>
                  <Heading size="md">{project.title}</Heading>
                </Card.Header>
                <Card.Body>
                  <Text color="gray.600" mb={4}>
                    {project.description}
                  </Text>
                  <Stack direction="row" wrap="wrap" gap={2} mb={4}>
                    {project.technologies.map((tech) => (
                      <Badge key={tech} colorPalette="brand" variant="subtle">
                        {tech}
                      </Badge>
                    ))}
                  </Stack>
                  <HStack gap={4}>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                    >
                      <a href={project.githubUrl}>
                        <Icon as={FiGithub} />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      colorPalette="brand"
                      asChild
                    >
                      <a href={project.liveUrl}>
                        <Icon as={FiExternalLink} />
                        Live Demo
                      </a>
                    </Button>
                  </HStack>
                </Card.Body>
              </Card.Root>
            ))}
          </SimpleGrid>
        </Box>

        {/* Contact Section */}
        <Box py={16} textAlign="center">
          <VStack gap={6}>
            <Heading size="xl">Let&apos;s Work Together</Heading>
            <Text fontSize="lg" color="gray.600" maxW="md">
              I&apos;m always interested in new opportunities and exciting projects.
              Let&apos;s discuss how we can bring your ideas to life.
            </Text>
            <HStack gap={4}>
              <Button colorPalette="brand" size="lg">
                <FiMail />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                <FiGithub />
                View GitHub
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Container>

      <Footer />
    </Box>
  )
}
