import React, { InputHTMLAttributes } from 'react'
// import { useField } from 'formik'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { MutationSigninArgs } from '../generated/graphql'
import { ErrorMessage } from '@hookform/error-message'

type inputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name?: string | null
  label?: string | null
  placeholder?: string | null
  type?: string | null
  ref?: [string] | null
}

// '' =. false
// 'error message stuff' => true

export const InputField: React.FC<inputFieldProps> = ({
  name,
  label,
  placeholder,
  type,
}) => {
  const { register, errors } = useForm()
  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        {...register}
        id={name}
        type={type}
        placeholder={placeholder}
        ref={register({ required: true })}
      />
      <ErrorMessage
        errors={errors}
        name={name === 'username' ? 'username' : 'password'}
        render={({ message }) => (
          <p style={{ color: 'red', fontSize: '13px' }}>{message}</p>
        )}
      />
    </FormControl>
  )
}
