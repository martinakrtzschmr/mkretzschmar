'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Avatar,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const pathname = usePathname()

  return (
    <>
      <Box bg={useColorModeValue('white', 'gray.900')} px={4} boxShadow="sm">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Text fontSize="xl" fontWeight="bold" color="brand.500">
                Martin Kretzschmar
              </Text>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <Link key={link.name} href={link.href}>
                  <Button
                    variant="ghost"
                    colorScheme={pathname === link.href ? 'brand' : 'gray'}
                    fontWeight={pathname === link.href ? 'bold' : 'normal'}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={'https://avatars.dicebear.com/api/male/username.svg'}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link key={link.name} href={link.href}>
                  <Button
                    variant="ghost"
                    colorScheme={pathname === link.href ? 'brand' : 'gray'}
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


