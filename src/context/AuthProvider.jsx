import React from 'react'
import { createContext, useState } from 'react'
import { getLocaleStorage } from '../utils/localStorage'
import { useEffect } from 'react'

export const AuthContext = createContext()
const AuthProvider = ({children}) => {

  const [userData, setuserData] = useState(null)


  useEffect(() => {
    const {employee, admin}= getLocaleStorage()
    setuserData({employee, admin})

  
  }, [])
  
  

  
  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider