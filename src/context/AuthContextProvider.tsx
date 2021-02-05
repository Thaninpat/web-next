import React, { createContext, useState, useEffect } from 'react'
import { useMeQuery, User } from '../generated/graphql'
import Router from 'next/router'
import Loader from 'react-spinners/ScaleLoader'

interface Props {}

type Actions = 'signup' | 'signin' | 'request' | 'reset' | 'close'

type HandleAuthAction = (action: Actions) => void

interface AuthContextValues {
  authAction: Actions
  handleAuthAction: HandleAuthAction
  loggedInUser: User | null
  setAuthUser: (user: User | null) => void
}

const initialState: AuthContextValues = {
  authAction: 'close',
  handleAuthAction: () => {},
  loggedInUser: null,
  setAuthUser: () => {},
}

export const AuthContext = createContext<AuthContextValues>(initialState)

const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [authAction, setAuthAction] = useState<Actions>('close')
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null)

  const { data, loading } = useMeQuery()
  // if(!!loading) return <Loader/>
  useEffect(() => {
    if (data?.me) setLoggedInUser(data.me)
  }, [data?.me])

  // TODO: เมื่อ signout แท็ปอื่นที่เปิดอยู่ก็จะ signout ออกไปด้วย

  useEffect(() => {
    const syncSignout = (e: StorageEvent) => {
      if (e.key === 'signout') {
        // Log user out
        setLoggedInUser(null)

        // Push user to Sign In page
        Router.push('/signIn')
      }
    }
    window.addEventListener('storage', syncSignout)

    return () => window.removeEventListener('storage', syncSignout)
  }, [])

  const handleAuthAction: HandleAuthAction = (action) => {
    setAuthAction(action)
  }

  const setAuthUser = (user: User | null) => setLoggedInUser(user)
  // console.log(loggedInUser);
  return (
    <AuthContext.Provider
      value={{
        authAction,
        handleAuthAction,
        loggedInUser,
        setAuthUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
