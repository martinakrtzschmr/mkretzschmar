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
  Avatar,
  Badge,
} from '@chakra-ui/react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function About() {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.',
    },
    {
      title: 'Frontend Developer',
      company: 'Startup Inc',
      period: '2020 - 2022',
      description: 'Built responsive user interfaces and collaborated with design teams to create engaging user experiences.',
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: '2019 - 2020',
      description: 'Developed and maintained client websites using modern web technologies and best practices.',
    },
  ]

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University of Technology',
      year: '2019',
    },
    {
      degree: 'Full-Stack Web Development Bootcamp',
      school: 'Tech Academy',
      year: '2018',
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
              About Me
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              I&apos;m a passionate full-stack developer with over 5 years of experience creating
              digital solutions that make a difference. I love turning complex problems into
              simple, beautiful, and intuitive designs.
            </Text>
          </VStack>
        </Stack>

        {/* Story Section */}
        <Box py={16}>
          <VStack gap={8} align="stretch">
            <Heading size="xl" textAlign="center">
              My Story
            </Heading>
            <Text fontSize="lg" color="gray.600" textAlign="center" maxW="4xl" mx="auto">
              My journey in web development began during my computer science studies, where I
              discovered my passion for creating digital experiences. Since then, I&apos;ve worked
              with various technologies and frameworks, always staying up-to-date with the
              latest trends and best practices in the industry.
            </Text>
            <Text fontSize="lg" color="gray.600" textAlign="center" maxW="4xl" mx="auto">
              I believe in writing clean, maintainable code and creating user experiences that
              are both functional and delightful. When I&apos;m not coding, you can find me exploring
              new technologies, contributing to open-source projects, or sharing knowledge with
              the developer community.
            </Text>
          </VStack>
        </Box>

        {/* Experience Section */}
        <Box py={16}>
          <Heading size="xl" textAlign="center" mb={8}>
            Professional Experience
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
            {experiences.map((exp, index) => (
              <Card.Root key={index} h="full">
                <Card.Body>
                  <VStack align="start" gap={4}>
                    <VStack align="start" gap={2}>
                      <Heading size="md" color="brand.500">
                        {exp.title}
                      </Heading>
                      <Text fontWeight="bold" color="gray.700">
                        {exp.company}
                      </Text>
                      <Badge colorPalette="brand" variant="subtle">
                        {exp.period}
                      </Badge>
                    </VStack>
                    <Text color="gray.600">
                      {exp.description}
                    </Text>
                  </VStack>
                </Card.Body>
              </Card.Root>
            ))}
          </SimpleGrid>
        </Box>

        {/* Education Section */}
        <Box py={16}>
          <Heading size="xl" textAlign="center" mb={8}>
            Education
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} maxW="4xl" mx="auto">
            {education.map((edu, index) => (
              <Card.Root key={index}>
                <Card.Body>
                  <VStack align="start" gap={3}>
                    <Heading size="md" color="brand.500">
                      {edu.degree}
                    </Heading>
                    <Text fontWeight="bold" color="gray.700">
                      {edu.school}
                    </Text>
                    <Badge colorPalette="gray" variant="subtle">
                      {edu.year}
                    </Badge>
                  </VStack>
                </Card.Body>
              </Card.Root>
            ))}
          </SimpleGrid>
        </Box>

        {/* Values Section */}
        <Box py={16}>
          <Heading size="xl" textAlign="center" mb={8}>
            What I Value
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            <VStack gap={4} textAlign="center">
              <Heading size="md" color="brand.500">
                Quality Code
              </Heading>
              <Text color="gray.600">
                I believe in writing clean, maintainable, and well-documented code that
                stands the test of time.
              </Text>
            </VStack>
            <VStack gap={4} textAlign="center">
              <Heading size="md" color="brand.500">
                User Experience
              </Heading>
              <Text color="gray.600">
                Every line of code I write is with the end user in mind, creating
                intuitive and accessible experiences.
              </Text>
            </VStack>
            <VStack gap={4} textAlign="center">
              <Heading size="md" color="brand.500">
                Continuous Learning
              </Heading>
              <Text color="gray.600">
                Technology evolves rapidly, and I&apos;m committed to staying current with
                the latest trends and best practices.
              </Text>
            </VStack>
          </SimpleGrid>
        </Box>
      </Container>

      <Footer />
    </Box>
  )
}
