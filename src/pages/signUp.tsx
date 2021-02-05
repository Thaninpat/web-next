import React, { useContext } from 'react'
import Link from 'next/link'

import { useSignUpMutation } from '../generated/graphql'

import { useForm } from 'react-hook-form'
import { AuthContext } from '../context/AuthContextProvider'
import { useRouter } from 'next/router'
import { ErrorMessage } from '@hookform/error-message'
import { isAdmin } from '../helpers/authHelpers'
import { Wrapper } from '../components/Wrapper'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Stack,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react'

interface signUpProps {
  username: string
  email: string
  password: string
}

const signUp: React.FC<signUpProps> = () => {
  const { handleAuthAction, setAuthUser } = useContext(AuthContext)
  const { register, errors, handleSubmit, formState } = useForm<signUpProps>()

  const router = useRouter()

  const [signup, { loading, error }] = useSignUpMutation()

  const submitSignup = handleSubmit(async ({ username, email, password }) => {
    try {
      const response = await signup({
        variables: { username, email, password },
      })
      if (response?.data?.signup) {
        const { signup } = response.data

        if (signup) {
          handleAuthAction('close')
          setAuthUser(signup)
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
          Sign up
        </Heading>
      </Box>
      <form onSubmit={submitSignup}>
        <FormControl>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <Input
            name='email'
            id='email'
            placeholder='Your email'
            ref={register({
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email is in wrong format',
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
            <Link href='/signIn'>
              <a style={{ color: '#0366d6', margin: '0' }}>Sign in already?</a>
            </Link>
          </Text>
        </Box>
      </form>
    </Wrapper>
  )
}
export default signUp

// <div className={styles.container}>
//   <form className={styles.container} onSubmit={submitSignup}>
//     <header>
//       <h2>Signup</h2>
//     </header>
//     <div className='input-container'>
//       <label>Username</label>
//       <input
//         type='text'
//         name='username'
//         id='username'
//         placeholder='Your username'
//         autoComplete='new-password'
//         ref={register({
//           required: 'Username is required',
//           minLength: {
//             value: 3,
//             message: 'Username must be at least 3 characters',
//           },
//           maxLength: {
//             value: 60,
//             message: 'Username must be not more than 60 characters ',
//           },
//         })}
//       />
//       <ErrorMessage
//         errors={errors}
//         name='username'
//         render={({ message }) => (
//           <p style={{ color: 'red', fontSize: '13px' }}>{message}</p>
//         )}
//       />
//     </div>

//     <div className='input-container'>
//       <label>Email</label>

//       <input
// type='text'
// name='email'
// id='email'
// placeholder='Your email'
// autoComplete='new-password'
// ref={register({
//   required: 'Email is required',
//   pattern: {
//     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//     message: 'Email is in wrong format',
//   },
// })}
//       />
//       <ErrorMessage
//         errors={errors}
//         name='email'
//         render={({ message }) => (
//           <p style={{ color: 'red', fontSize: '13px' }}>{message}</p>
//         )}
//       />
//     </div>

//     <div className='input-container'>
//       <label>Password</label>

//       <input
//         type='password'
//         name='password'
//         id='password'
//         placeholder='Your password'
//         ref={register({
//           required: 'Password is required',
//           minLength: {
//             value: 6,
//             message: 'Password must be at least 6 characters',
//           },
//           maxLength: {
//             value: 60,
//             message: 'Password must be not more than 50 characters ',
//           },
//         })}
//       />
//       <ErrorMessage
//         errors={errors}
//         name='password'
//         render={({ message }) => (
//           <p style={{ color: 'red', fontSize: '13px' }}>{message}</p>
//         )}
//       />
//     </div>

//     <button
//       disabled={loading}
//       style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
//     >
//       {loading ? 'Loading...' : 'Submit'}
//     </button>

//     {error && (
//       <p style={{ color: 'red', fontSize: '13px' }}>
//         {error.graphQLErrors[0]?.message ||
//           'Sorry, something went wrong!!!'}
//       </p>
//     )}
//   </form>
// </div>
