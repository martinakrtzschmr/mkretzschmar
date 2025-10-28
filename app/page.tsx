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
  CardBody,
  CardHeader,
  Badge,
  Flex,
  Avatar,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react'
import { FiGithub, FiExternalLink, FiMail, FiMapPin } from 'react-icons/fi'
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
        <Stack spacing={8} align="center" textAlign="center" py={16}>
          <Avatar
            size="2xl"
            src="https://avatars.dicebear.com/api/male/martin.svg"
            name="Martin Kretzschmar"
          />
          <VStack spacing={4}>
            <Heading size="2xl" color="brand.500">
              Martin Kretzschmar
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl">
              Full-Stack Developer passionate about creating innovative web applications
              with modern technologies and clean code.
            </Text>
            <HStack spacing={4}>
              <Button colorScheme="brand" size="lg">
                View My Work
              </Button>
              <Button variant="outline" size="lg" leftIcon={<FiMail />}>
                Contact Me
              </Button>
            </HStack>
          </VStack>
        </Stack>

        {/* Skills Section */}
        <Box py={16}>
          <Heading size="xl" textAlign="center" mb={8}>
            Skills & Technologies
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase', 'Python', 'Docker'].map((skill) => (
              <Card key={skill}>
                <CardBody textAlign="center">
                  <Text fontWeight="bold">{skill}</Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>

        {/* Featured Projects */}
        <Box py={16}>
          <Heading size="xl" textAlign="center" mb={8}>
            Featured Projects
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {projects.map((project, index) => (
              <Card key={index} h="full">
                <CardHeader>
                  <Heading size="md">{project.title}</Heading>
                </CardHeader>
                <CardBody>
                  <Text color="gray.600" mb={4}>
                    {project.description}
                  </Text>
                  <Stack direction="row" wrap="wrap" gap={2} mb={4}>
                    {project.technologies.map((tech) => (
                      <Badge key={tech} colorScheme="brand" variant="subtle">
                        {tech}
                      </Badge>
                    ))}
                  </Stack>
                  <HStack spacing={4}>
                    <Button
                      size="sm"
                      variant="outline"
                      leftIcon={<Icon as={FiGithub} />}
                      as="a"
                      href={project.githubUrl}
                    >
                      Code
                    </Button>
                    <Button
                      size="sm"
                      colorScheme="brand"
                      leftIcon={<Icon as={FiExternalLink} />}
                      as="a"
                      href={project.liveUrl}
                    >
                      Live Demo
                    </Button>
                  </HStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>

        {/* Contact Section */}
        <Box py={16} textAlign="center">
          <VStack spacing={6}>
            <Heading size="xl">Let's Work Together</Heading>
            <Text fontSize="lg" color="gray.600" maxW="md">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can bring your ideas to life.
            </Text>
            <HStack spacing={4}>
              <Button colorScheme="brand" size="lg" leftIcon={<FiMail />}>
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" leftIcon={<FiGithub />}>
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
