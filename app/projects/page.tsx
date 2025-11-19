'use client'

import {
  Box,
  Container,
  Stack,
  Text,
  Heading,
  SimpleGrid,
  Card,
  Badge,
  HStack,
  VStack,
  Button,
  Icon,
  Image,
  Flex,
} from '@chakra-ui/react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing with Stripe, inventory management, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Express'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather conditions and forecasts with interactive charts and maps.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Vuetify'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
    },
    {
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics dashboard for social media metrics with data visualization and reporting features.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'MongoDB'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
    },
    {
      title: 'Blog CMS',
      description: 'A headless CMS for managing blog content with a modern admin interface and API for content delivery.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      technologies: ['Next.js', 'Strapi', 'GraphQL', 'PostgreSQL'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
    },
    {
      title: 'Real-time Chat App',
      description: 'A real-time messaging application with group chats, file sharing, and message encryption.',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'JWT'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
    },
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Navigation />

      <Container maxW="6xl" py={8} flex="1">
        {/* Hero Section */}
        <Stack gap={8} align="center" textAlign="center" py={16}>
          <VStack gap={4}>
            <Heading size="2xl" color="brand.500">
              My Projects
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              A collection of projects that showcase my skills and passion for creating
              innovative digital solutions.
            </Text>
          </VStack>
        </Stack>

        {/* Featured Projects */}
        <Box py={16}>
          <Heading size="xl" mb={8}>
            Featured Projects
          </Heading>
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
            {featuredProjects.map((project, index) => (
              <Card.Root key={index} overflow="hidden" h="full">
                <Image
                  src={project.image}
                  alt={project.title}
                  h="200px"
                  objectFit="cover"
                />
                <Card.Header>
                  <Heading size="md">{project.title}</Heading>
                </Card.Header>
                <Card.Body>
                  <VStack align="start" gap={4}>
                    <Text color="gray.600">
                      {project.description}
                    </Text>
                    <Flex wrap="wrap" gap={2}>
                      {project.technologies.map((tech) => (
                        <Badge key={tech} colorPalette="brand" variant="subtle">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                    <HStack gap={4} w="full">
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        flex="1"
                      >
                        <a href={project.githubUrl}>
                          <Icon as={FiGithub} />
                          View Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        colorPalette="brand"
                        asChild
                        flex="1"
                      >
                        <a href={project.liveUrl}>
                          <Icon as={FiExternalLink} />
                          Live Demo
                        </a>
                      </Button>
                    </HStack>
                  </VStack>
                </Card.Body>
              </Card.Root>
            ))}
          </SimpleGrid>
        </Box>

        {/* Other Projects */}
        <Box py={16}>
          <Heading size="xl" mb={8}>
            Other Projects
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
            {otherProjects.map((project, index) => (
              <Card.Root key={index} h="full">
                <Image
                  src={project.image}
                  alt={project.title}
                  h="150px"
                  objectFit="cover"
                />
                <Card.Header>
                  <Heading size="md">{project.title}</Heading>
                </Card.Header>
                <Card.Body>
                  <VStack align="start" gap={4}>
                    <Text color="gray.600" fontSize="sm">
                      {project.description}
                    </Text>
                    <Flex wrap="wrap" gap={1}>
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} colorPalette="gray" variant="subtle" size="sm">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge colorPalette="gray" variant="subtle" size="sm">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </Flex>
                    <HStack gap={2} w="full">
                      <Button
                        size="xs"
                        variant="outline"
                        asChild
                        flex="1"
                      >
                        <a href={project.githubUrl}>
                          <Icon as={FiGithub} />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="xs"
                        colorPalette="brand"
                        asChild
                        flex="1"
                      >
                        <a href={project.liveUrl}>
                          <Icon as={FiExternalLink} />
                          Demo
                        </a>
                      </Button>
                    </HStack>
                  </VStack>
                </Card.Body>
              </Card.Root>
            ))}
          </SimpleGrid>
        </Box>

        {/* Call to Action */}
        <Box py={16} textAlign="center">
          <VStack gap={6}>
            <Heading size="xl">Interested in Working Together?</Heading>
            <Text fontSize="lg" color="gray.600" maxW="md">
              I&apos;m always excited to take on new challenges and create amazing digital experiences.
            </Text>
            <Button colorPalette="brand" size="lg">
              Get In Touch
            </Button>
          </VStack>
        </Box>
      </Container>

      <Footer />
    </Box>
  )
}
