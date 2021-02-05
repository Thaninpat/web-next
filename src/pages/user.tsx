import { Container, Flex, Heading, Input, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useUserQuery } from '../generated/graphql'

interface userProps {}

const user: React.FC<userProps> = ({}) => {
  const [addUser, setAddUser] = useState('')
  const [addRole, setAddRole] = useState('')

  return (
    <Flex align={'center'} justify={'center'} p={20} flexDirection={'column'}>
      <Heading>User page</Heading>
      <Container margin={10}>
        <Stack spacing={4}>
          <Input
            type='text'
            placeholder='Input user'
            value={addUser}
            onChange={(event) => {
              setAddUser(event.target.value)
            }}
          />
          <Input
            type='text'
            placeholder='Input role'
            value={addRole}
            onChange={(event) => {
              setAddRole(event.target.value)
            }}
          />
        </Stack>
      </Container>
    </Flex>
  )
}

export default user
