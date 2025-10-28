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
  Avatar,
  Badge,
  Divider,
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
        <Stack spacing={8} align="center" textAlign="center" py={16}>
          <Avatar
            size="2xl"
            src="https://avatars.dicebear.com/api/male/martin.svg"
            name="Martin Kretzschmar"
          />
          <VStack spacing={4}>
            <Heading size="2xl" color="brand.500">
              About Me
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              I'm a passionate full-stack developer with over 5 years of experience creating 
              digital solutions that make a difference. I love turning complex problems into 
              simple, beautiful, and intuitive designs.
            </Text>
          </VStack>
        </Stack>

        {/* Story Section */}
        <Box py={16}>
          <VStack spacing={8} align="stretch">
            <Heading size="xl" textAlign="center">
              My Story
            </Heading>
            <Text fontSize="lg" color="gray.600" textAlign="center" maxW="4xl" mx="auto">
              My journey in web development began during my computer science studies, where I 
              discovered my passion for creating digital experiences. Since then, I've worked 
              with various technologies and frameworks, always staying up-to-date with the 
              latest trends and best practices in the industry.
            </Text>
            <Text fontSize="lg" color="gray.600" textAlign="center" maxW="4xl" mx="auto">
              I believe in writing clean, maintainable code and creating user experiences that 
              are both functional and delightful. When I'm not coding, you can find me exploring 
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
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {experiences.map((exp, index) => (
              <Card key={index} h="full">
                <CardBody>
                  <VStack align="start" spacing={4}>
                    <VStack align="start" spacing={2}>
                      <Heading size="md" color="brand.500">
                        {exp.title}
                      </Heading>
                      <Text fontWeight="bold" color="gray.700">
                        {exp.company}
                      </Text>
                      <Badge colorScheme="brand" variant="subtle">
                        {exp.period}
                      </Badge>
                    </VStack>
                    <Text color="gray.600">
                      {exp.description}
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>

        {/* Education Section */}
        <Box py={16}>
          <Heading size="xl" textAlign="center" mb={8}>
            Education
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} maxW="4xl" mx="auto">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardBody>
                  <VStack align="start" spacing={3}>
                    <Heading size="md" color="brand.500">
                      {edu.degree}
                    </Heading>
                    <Text fontWeight="bold" color="gray.700">
                      {edu.school}
                    </Text>
                    <Badge colorScheme="gray" variant="subtle">
                      {edu.year}
                    </Badge>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>

        {/* Values Section */}
        <Box py={16}>
          <Heading size="xl" textAlign="center" mb={8}>
            What I Value
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <VStack spacing={4} textAlign="center">
              <Heading size="md" color="brand.500">
                Quality Code
              </Heading>
              <Text color="gray.600">
                I believe in writing clean, maintainable, and well-documented code that 
                stands the test of time.
              </Text>
            </VStack>
            <VStack spacing={4} textAlign="center">
              <Heading size="md" color="brand.500">
                User Experience
              </Heading>
              <Text color="gray.600">
                Every line of code I write is with the end user in mind, creating 
                intuitive and accessible experiences.
              </Text>
            </VStack>
            <VStack spacing={4} textAlign="center">
              <Heading size="md" color="brand.500">
                Continuous Learning
              </Heading>
              <Text color="gray.600">
                Technology evolves rapidly, and I'm committed to staying current with 
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


