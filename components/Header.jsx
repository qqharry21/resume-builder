/** @format */

import React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  Heading,
  Menu,
  Button as Btn,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useMediaQuery,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from './icon';
import { useRouter } from 'next/router';
import { Button, IconButton } from './motion';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const [isMobile] = useMediaQuery('(max-width: 30em)');
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon w={25} h={25} /> : <HamburgerIcon w={25} h={25} />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <NextLink href='/' passHref>
                <Heading size='lg' colorScheme='teal' cursor='pointer'>
                  Resume {!isMobile && 'Builder'}
                </Heading>
              </NextLink>
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {isMobile ? (
              <IconButton
                variant='ghost'
                aria-label='Add New Resume'
                colorScheme={'teal'}
                size={'sm'}
                mr={4}
                onClick={() => router.push('/resume/add')}
                icon={<AddIcon />}></IconButton>
            ) : (
              <Button
                variant={'outline'}
                aria-label='Add New Resume'
                colorScheme={'teal'}
                _hover={{
                  bg: 'teal.500',
                  color: 'white',
                }}
                _focus={{
                  bg: 'teal.500',
                  color: 'white',
                }}
                size={'sm'}
                mr={4}
                onClick={() => router.push('/resume/add')}
                leftIcon={<AddIcon />}>
                New
              </Button>
            )}

            <Menu>
              <MenuButton as={Btn} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      color: 'white',
      bg: useColorModeValue('teal.500'),
    }}
    href={'#'}>
    {children}
  </Link>
);
const Links = ['Dashboard', 'My Resume'];

export default Header;
