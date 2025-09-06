import React from 'react'
import { createContext, useState } from 'react'
import { getLocaleStorage } from '../utils/localStorage'

export const AuthContext = createContext()
const AuthProvider = ({children}) => {

  const [userData, setuserData] = useState(null)
  const data = getLocaleStorage()
  return (
    <AuthContext.Provider value={"sam"}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider