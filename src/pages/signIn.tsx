import React, { useContext } from 'react'
import Link from 'next/link'

import {
  MutationSigninArgs,
  User,
  useSignInMutation,
} from '../generated/graphql'

import { useForm } from 'react-hook-form'
import { AuthContext } from '../context/AuthContextProvider'
import { useRouter } from 'next/router'
import { ErrorMessage } from '@hookform/error-message'
import { isAdmin } from '../helpers/authHelpers'
import { Wrapper } from '../components/Wrapper'
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react'

interface signInProps {}

const signIn: React.FC<signInProps> = () => {
  const { handleAuthAction, setAuthUser } = useContext(AuthContext)
  const {
    register,
    errors,
    handleSubmit,
    formState,
  } = useForm<MutationSigninArgs>()
  const router = useRouter()
  const [signInMutation, { loading, error }] = useSignInMutation({
    variables: {
      username: '',
      password: '',
    },
  })

  const submitSignin = handleSubmit(async ({ username, password }) => {
    try {
      const response = await signInMutation({
        variables: { username, password },
      })
      if (response.data?.signin) {
        const { signin } = response.data
        const user = response.data.signin

        if (signin) {
          handleAuthAction('close')
          setAuthUser(signin)
          router.push('/')
        }
        if (isAdmin(user)) {
          //  Push user to their admin
          router.push('/')
        } else {
          //  Push user to their user
          router.push('/')
        }
      }
    } catch (error) {
      console.log(error)
      setAuthUser(null)
    }
  })

  return (
    <Wrapper variant='small'>
      <Box d='flex' mt='2' alignItems='center' justifyContent='center'>
        <Heading as='h2' size='xl'>
          Sign in
        </Heading>
      </Box>
      <form onSubmit={submitSignin}>
        <FormControl>
          <FormLabel htmlFor='username'>Username</FormLabel>
          <Input
            type='text'
            name='username'
            id='username'
            placeholder='Your username'
            aria-invalid={errors.username ? 'true' : 'false'}
            ref={register({
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Username must be at least 3 characters',
              },
              maxLength: {
                value: 60,
                message: 'Username must be not more than 60 characters ',
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name='username'
            render={({ message }) => (
              <p style={{ color: 'red', fontSize: '13px' }}>{message}</p>
            )}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Input
            type='password'
            name='password'
            id='password'
            placeholder='Your password'
            aria-invalid={errors.password ? 'true' : 'false'}
            ref={register({
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
              maxLength: {
                value: 60,
                message: 'Password must be not more than 60 characters ',
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name='password'
            render={({ message }) => (
              <p style={{ color: 'red', fontSize: '13px' }}>{message}</p>
            )}
          />
        </FormControl>

        <Button
          mt={4}
          mb={4}
          ml={1}
          colorScheme='blue'
          type='submit'
          isLoading={formState.isSubmitting}
        >
          Submit
        </Button>
        <Box m={1}>
          {error && (
            <p style={{ color: 'red', fontSize: '13px' }}>
              {error.graphQLErrors[0]?.message ||
                'Sorry, something went wrong!!!'}
            </p>
          )}
        </Box>
        <Box m={0}>
          <Text as='sub' fontSize='md'>
            Forgot password?
            <Link href='/signIn'>
              <a style={{ color: '#0366d6' }}>Click</a>
            </Link>
          </Text>
        </Box>
        <Box m={0}>
          <Text as='sub' fontSize='md'>
            New account?
            <Link href='/signUp'>
              <a style={{ color: '#0366d6' }}>Create account</a>
            </Link>
          </Text>
        </Box>
      </form>
    </Wrapper>
  )
}
export default signIn
