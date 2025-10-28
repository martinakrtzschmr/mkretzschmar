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
  Progress,
  VStack,
  HStack,
  Badge,
  Icon,
  Flex,
} from '@chakra-ui/react'
import { FiCode, FiDatabase, FiCloud, FiSmartphone } from 'react-icons/fi'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FiCode,
      color: 'blue',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'Vue.js', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      title: 'Backend Development',
      icon: FiDatabase,
      color: 'green',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'FastAPI', level: 80 },
        { name: 'REST APIs', level: 92 },
        { name: 'GraphQL', level: 75 },
      ],
    },
    {
      title: 'Database & Cloud',
      icon: FiCloud,
      color: 'purple',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'Supabase', level: 90 },
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 80 },
        { name: 'Redis', level: 70 },
      ],
    },
    {
      title: 'Mobile Development',
      icon: FiSmartphone,
      color: 'orange',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 70 },
        { name: 'Expo', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'App Store', level: 75 },
        { name: 'Play Store', level: 75 },
      ],
    },
  ]

  const tools = [
    'Git & GitHub', 'VS Code', 'Figma', 'Postman', 'Jest', 'Cypress',
    'Webpack', 'Vite', 'ESLint', 'Prettier', 'Storybook', 'Chrome DevTools'
  ]

  const certifications = [
    {
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      year: '2023',
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      year: '2022',
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      year: '2022',
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
              Skills & Expertise
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              A comprehensive overview of my technical skills and the tools I use to 
              bring ideas to life.
            </Text>
          </VStack>
        </Stack>

        {/* Skills by Category */}
        <Box py={16}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardBody>
                  <VStack align="start" spacing={6}>
                    <HStack spacing={4}>
                      <Icon as={category.icon} boxSize={8} color={`${category.color}.500`} />
                      <Heading size="md" color={`${category.color}.500`}>
                        {category.title}
                      </Heading>
                    </HStack>
                    <VStack spacing={4} w="full">
                      {category.skills.map((skill, skillIndex) => (
                        <Box key={skillIndex} w="full">
                          <Flex justify="space-between" mb={2}>
                            <Text fontWeight="medium">{skill.name}</Text>
                            <Text fontSize="sm" color="gray.500">
                              {skill.level}%
                            </Text>
                          </Flex>
                          <Progress
                            value={skill.level}
                            colorScheme={category.color}
                            size="sm"
                            borderRadius="full"
                          />
                        </Box>
                      ))}
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>

        {/* Tools & Technologies */}
        <Box py={16}>
          <Heading size="xl" textAlign="center" mb={8}>
            Tools & Technologies
          </Heading>
          <Flex wrap="wrap" gap={3} justify="center">
            {tools.map((tool, index) => (
              <Badge
                key={index}
                colorScheme="brand"
                variant="subtle"
                px={4}
                py={2}
                fontSize="md"
                borderRadius="full"
              >
                {tool}
              </Badge>
            ))}
          </Flex>
        </Box>

        {/* Certifications */}
        <Box py={16}>
          <Heading size="xl" textAlign="center" mb={8}>
            Certifications
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {certifications.map((cert, index) => (
              <Card key={index}>
                <CardBody textAlign="center">
                  <VStack spacing={3}>
                    <Heading size="md" color="brand.500">
                      {cert.name}
                    </Heading>
                    <Text fontWeight="medium" color="gray.700">
                      {cert.issuer}
                    </Text>
                    <Badge colorScheme="gray" variant="subtle">
                      {cert.year}
                    </Badge>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>

        {/* Learning Philosophy */}
        <Box py={16} textAlign="center">
          <VStack spacing={6}>
            <Heading size="xl">Continuous Learning</Heading>
            <Text fontSize="lg" color="gray.600" maxW="3xl">
              Technology evolves rapidly, and I'm committed to staying current with the latest 
              trends and best practices. I regularly participate in online courses, attend 
              conferences, and contribute to open-source projects to expand my knowledge and skills.
            </Text>
            <HStack spacing={4}>
              <Badge colorScheme="green" variant="subtle" px={4} py={2}>
                Currently Learning: AI/ML
              </Badge>
              <Badge colorScheme="blue" variant="subtle" px={4} py={2}>
                Next Focus: Web3
              </Badge>
            </HStack>
          </VStack>
        </Box>
      </Container>

      <Footer />
    </Box>
  )
}


