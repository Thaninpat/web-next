import React, { useContext } from 'react'
import Link from 'next/link'
import Router from 'next/router'

// import styled from 'styled-components'
import { AuthContext } from '../context/AuthContextProvider'
import { useMeQuery, useSignoutMutation } from '../generated/graphql'
import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const { loggedInUser, handleAuthAction, setAuthUser } = useContext(
    AuthContext
  )

  const [signoutMutation] = useSignoutMutation()

  const handleSignout = async () => {
    try {
      const response = await signoutMutation()

      if (!!response.data?.signout?.message) {
        setAuthUser(null)

        // ทำให้ TAP อื่นๆ Signout ออกไปด้วย
        window.localStorage.setItem('signout', Date.now().toString())

        //  Push user go home page
        Router.push('/signIn')
      }
    } catch (error) {
      alert('Sorry cannot proceed')
    }
  }
  let body = null
  if (!!loggedInUser) {
    body = (
      <>
        <Flex>
          <Link href='/'>Home</Link>
          <Link href='/user'>Users</Link>
          <Link href='/budgetOverview'>Budget</Link>
          <Link href='/product'>Product</Link>
          <Link href='/job2'>Job</Link>
        </Flex>
        <Menu>
          <MenuButton size='sm' mr={4} ml={4}>
            <Avatar size='sm' name={loggedInUser.username} src='' />
          </MenuButton>
          <MenuList color={'black'}>
            <MenuItem>Edit profile</MenuItem>
            <MenuItem type='submit' onClick={handleSignout}>
              Sign Out
            </MenuItem>
          </MenuList>
        </Menu>
      </>
    )
  } else {
    body = (
      <Flex>
        <Link href='/signIn'>Sign In</Link>
        <Link href='/signUp'>Sign Up</Link>
      </Flex>
    )
  }

  return (
    <Box bg='#888' w='100%' p={2} color='white'>
      <Flex justifyContent={'space-between'}>{body}</Flex>
    </Box>
  )
}

export default NavBar
