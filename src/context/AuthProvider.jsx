import React from 'react'
import { createContext, useState } from 'react'
import { getLocaleStorage } from '../utils/localStorage'
import { useEffect } from 'react'

export const AuthContext = createContext()
const AuthProvider = ({children}) => {

  const [userData, setuserData] = useState(null)


  useEffect(() => {
    const {employees, admin}= getLocaleStorage()
    setuserData({employees, admin})

  
  }, [])
  
  

  
  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider