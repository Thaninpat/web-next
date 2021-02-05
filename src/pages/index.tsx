import Router from 'next/router'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

import { useContext, useEffect } from 'react'
import NavBar from '../components/NavBar'
import { AuthContext } from '../context/AuthContextProvider'
// import Loader from 'react-spinners/ScaleLoader'
import Loader from 'react-loader-spinner'

const Index = () => {
  const { loggedInUser } = useContext(AuthContext)

  useEffect(() => {
    if (!loggedInUser) {
      Router.push('/')
    }
  }, [loggedInUser])

  return !loggedInUser ? (
    <Flex align={'center'} justify={'center'} p={20}>
      <Loader
        type='ThreeDots'
        color='#0366d6'
        height={50}
        width={50}
        timeout={10000}
      />
    </Flex>
  ) : (
    <>
      {/* <NavBar /> */}
      <Flex align={'center'} justify={'center'} p={20} flexDirection={'column'}>
        <Heading>Hello </Heading>
        <Text fontSize='3xl'>Home page</Text>
        <Box>
          <p> Username : {loggedInUser?.username}</p>
        </Box>
      </Flex>
    </>
  )
}

export default Index
