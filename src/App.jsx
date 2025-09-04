import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useEffect } from 'react'
import { getLocaleStorage, setLocaleStorage } from './utils/localStorage'
import { useState } from 'react'

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email,password)=>{
    if(email == 'admin@me.com' && password == '123'){
      console.log("this is Admin")
    }else if(email == 'user@me.com' && password == '123'){
      console.log("this is User")
    }else{
      alert("Invalid credentials")
    }

  }  


  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />:''}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App