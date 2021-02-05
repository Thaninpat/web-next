import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any
}

export type Query = {
  __typename?: 'Query'
  users: Array<Maybe<User>>
  me?: Maybe<User>
  JobIts: Array<Maybe<JobIt>>
  jobMe?: Maybe<JobIt>
  Factories: Array<Maybe<Factory>>
  FactoryById?: Maybe<Factory>
  FactoryFindOne?: Maybe<Factory>
  FactoryProducts: Array<Maybe<FactoryProduct>>
  FactoryProductById?: Maybe<FactoryProduct>
  productFindOne?: Maybe<FactoryProduct>
}

export type QueryJobMeArgs = {
  typeJob: Scalars['String']
}

export type QueryFactoryByIdArgs = {
  id: Scalars['String']
}

export type QueryFactoryFindOneArgs = {
  factoryName: Scalars['String']
}

export type QueryFactoryProductByIdArgs = {
  id: Scalars['String']
}

export type QueryProductFindOneArgs = {
  productName: Scalars['String']
}

/** User Model */
export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  username: Scalars['String']
  email: Scalars['String']
  roles: Array<Scalars['String']>
  createdAt: Scalars['DateTime']
  // jobIts: Array<Maybe<JobIt>>;
}

/** Job IT Model 2 */
export type JobIt = {
  __typename?: 'JobIt'
  id: Scalars['ID']
  typeJob: Scalars['String']
  comment: Scalars['String']
  desiredDate: Scalars['String']
  createdAt: Scalars['DateTime']
  user: User
}

/** Factory Data */
export type Factory = {
  __typename?: 'Factory'
  id: Scalars['ID']
  factoryName: Scalars['String']
  productsMe?: Maybe<Array<FactoryProduct>>
  receivedProducts: Array<Maybe<FactoryProduct>>
  createdAt: Scalars['DateTime']
  user?: Maybe<Array<User>>
}

/** ข้อมูลสินค้าที่บริษัทต้องๆผลิต */
export type FactoryProduct = {
  __typename?: 'FactoryProduct'
  id: Scalars['ID']
  factoryName: Factory
  productName: Scalars['String']
  factoryReceive: Array<Maybe<Factory>>
  description: Scalars['String']
  imageUrl: Scalars['String']
  createdAt: Scalars['DateTime']
  user?: Maybe<Array<User>>
}

export type Mutation = {
  __typename?: 'Mutation'
  signup?: Maybe<User>
  signin?: Maybe<User>
  signout?: Maybe<ResponseMessage>
  requestResetPassword?: Maybe<ResponseMessage>
  resetPassword?: Maybe<ResponseMessage>
  updateRoles?: Maybe<User>
  deleteUser?: Maybe<ResponseMessage>
  createJob: JobIt
  createFactory?: Maybe<Factory>
  createFactoryProduct?: Maybe<FactoryProduct>
}

export type MutationSignupArgs = {
  password: Scalars['String']
  email: Scalars['String']
  username: Scalars['String']
}

export type MutationSigninArgs = {
  password: Scalars['String']
  username: Scalars['String']
}

export type MutationRequestResetPasswordArgs = {
  email: Scalars['String']
}

export type MutationResetPasswordArgs = {
  token: Scalars['String']
  password: Scalars['String']
}

export type MutationUpdateRolesArgs = {
  userId: Scalars['String']
  newRoles: Array<Scalars['String']>
}

export type MutationDeleteUserArgs = {
  userId: Scalars['String']
}

export type MutationCreateJobArgs = {
  desiredDate: Scalars['String']
  comment: Scalars['String']
  typeJob: Scalars['String']
}

export type MutationCreateFactoryArgs = {
  factoryName: Scalars['String']
}

export type MutationCreateFactoryProductArgs = {
  imageUrl: Scalars['String']
  description: Scalars['String']
  factoryReceiveId?: Maybe<Scalars['String']>
  productName: Scalars['String']
  factoryNameId: Scalars['String']
}

export type ResponseMessage = {
  __typename?: 'ResponseMessage'
  message: Scalars['String']
}

export type SignInMutationVariables = Exact<{
  username: Scalars['String']
  password: Scalars['String']
}>

export type SignInMutation = { __typename?: 'Mutation' } & {
  signin?: Maybe<
    { __typename?: 'User' } & Pick<
      User,
      'id' | 'email' | 'username' | 'roles' | 'createdAt'
    >
  >
}

export type SignoutMutationVariables = Exact<{ [key: string]: never }>

export type SignoutMutation = { __typename?: 'Mutation' } & {
  signout?: Maybe<
    { __typename?: 'ResponseMessage' } & Pick<ResponseMessage, 'message'>
  >
}

export type SignUpMutationVariables = Exact<{
  username: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
}>

export type SignUpMutation = { __typename?: 'Mutation' } & {
  signup?: Maybe<
    { __typename?: 'User' } & Pick<
      User,
      'id' | 'email' | 'username' | 'roles' | 'createdAt'
    >
  >
}

export type JobItsQueryVariables = Exact<{ [key: string]: never }>

export type JobItsQuery = { __typename?: 'Query' } & {
  JobIts: Array<
    Maybe<
      { __typename?: 'JobIt' } & Pick<
        JobIt,
        'id' | 'typeJob' | 'comment' | 'desiredDate' | 'createdAt'
      >
    >
  >
}

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = { __typename?: 'Query' } & {
  me?: Maybe<
    { __typename?: 'User' } & Pick<
      User,
      'id' | 'email' | 'username' | 'roles' | 'createdAt'
    >
  >
}

export type UserQueryVariables = Exact<{ [key: string]: never }>

export type UserQuery = { __typename?: 'Query' } & {
  users: Array<
    Maybe<
      { __typename?: 'User' } & Pick<
        User,
        'id' | 'email' | 'username' | 'roles' | 'createdAt'
      >
    >
  >
}

export const SignInDocument = gql`
  mutation SignIn($username: String!, $password: String!) {
    signin(username: $username, password: $password) {
      id
      email
      username
      roles
      createdAt
    }
  }
`
export type SignInMutationFn = Apollo.MutationFunction<
  SignInMutation,
  SignInMutationVariables
>

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignInMutation,
    SignInMutationVariables
  >
) {
  return Apollo.useMutation<SignInMutation, SignInMutationVariables>(
    SignInDocument,
    baseOptions
  )
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>
export type SignInMutationOptions = Apollo.BaseMutationOptions<
  SignInMutation,
  SignInMutationVariables
>
export const SignoutDocument = gql`
  mutation Signout {
    signout {
      message
    }
  }
`
export type SignoutMutationFn = Apollo.MutationFunction<
  SignoutMutation,
  SignoutMutationVariables
>

/**
 * __useSignoutMutation__
 *
 * To run a mutation, you first call `useSignoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signoutMutation, { data, loading, error }] = useSignoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignoutMutation,
    SignoutMutationVariables
  >
) {
  return Apollo.useMutation<SignoutMutation, SignoutMutationVariables>(
    SignoutDocument,
    baseOptions
  )
}
export type SignoutMutationHookResult = ReturnType<typeof useSignoutMutation>
export type SignoutMutationResult = Apollo.MutationResult<SignoutMutation>
export type SignoutMutationOptions = Apollo.BaseMutationOptions<
  SignoutMutation,
  SignoutMutationVariables
>
export const SignUpDocument = gql`
  mutation SignUp($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      id
      email
      username
      roles
      createdAt
    }
  }
`
export type SignUpMutationFn = Apollo.MutationFunction<
  SignUpMutation,
  SignUpMutationVariables
>

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignUpMutation,
    SignUpMutationVariables
  >
) {
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(
    SignUpDocument,
    baseOptions
  )
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  SignUpMutation,
  SignUpMutationVariables
>
export const JobItsDocument = gql`
  query JobIts {
    JobIts {
      id
      typeJob
      comment
      desiredDate
      createdAt
    }
  }
`

/**
 * __useJobItsQuery__
 *
 * To run a query within a React component, call `useJobItsQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobItsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobItsQuery({
 *   variables: {
 *   },
 * });
 */
export function useJobItsQuery(
  baseOptions?: Apollo.QueryHookOptions<JobItsQuery, JobItsQueryVariables>
) {
  return Apollo.useQuery<JobItsQuery, JobItsQueryVariables>(
    JobItsDocument,
    baseOptions
  )
}
export function useJobItsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<JobItsQuery, JobItsQueryVariables>
) {
  return Apollo.useLazyQuery<JobItsQuery, JobItsQueryVariables>(
    JobItsDocument,
    baseOptions
  )
}
export type JobItsQueryHookResult = ReturnType<typeof useJobItsQuery>
export type JobItsLazyQueryHookResult = ReturnType<typeof useJobItsLazyQuery>
export type JobItsQueryResult = Apollo.QueryResult<
  JobItsQuery,
  JobItsQueryVariables
>
export const MeDocument = gql`
  query Me {
    me {
      id
      email
      username
      roles
      createdAt
    }
  }
`

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions)
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions)
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>
export const UserDocument = gql`
  query User {
    users {
      id
      email
      username
      roles
      createdAt
    }
  }
`

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(
  baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>
) {
  return Apollo.useQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    baseOptions
  )
}
export function useUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>
) {
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    baseOptions
  )
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>
