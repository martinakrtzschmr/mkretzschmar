'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Stack,
  Text,
  Avatar,
} from '@chakra-ui/react'
import { LuMenu, LuX } from 'react-icons/lu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useColorModeValue } from '../../components/ui/color-mode'

const Links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const bgColor = useColorModeValue('white', 'gray.900')

  return (
    <>
      <Box bg={bgColor} px={4} boxShadow="sm">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <LuX /> : <LuMenu />}
          </IconButton>
          <HStack gap={8} alignItems={'center'}>
            <Box>
              <Text fontSize="xl" fontWeight="bold" color="brand.500">
                Martin Kretzschmar
              </Text>
            </Box>
            <HStack
              as={'nav'}
              gap={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <Link key={link.name} href={link.href}>
                  <Button
                    variant="ghost"
                    colorPalette={pathname === link.href ? 'brand' : 'gray'}
                    fontWeight={pathname === link.href ? 'bold' : 'normal'}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Link href="/login">
              <Button
                rounded={'full'}
                variant={'ghost'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar.Root size={'sm'} name="User" src={'https://avatars.dicebear.com/api/male/username.svg'} />
              </Button>
            </Link>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} gap={4}>
              {Links.map((link) => (
                <Link key={link.name} href={link.href}>
                  <Button
                    variant="ghost"
                    colorPalette={pathname === link.href ? 'brand' : 'gray'}
                    fontWeight={pathname === link.href ? 'bold' : 'normal'}
                    w="full"
                    justifyContent="flex-start"
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
