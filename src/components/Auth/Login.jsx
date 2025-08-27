import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-red-600'>
            <form className="flex flex-col items-center justify-center">
                <input className="text-black outline-none border-2 border-emerald-600 bg-transparent rounded-full text-xl py-3 px-5 placeholder:text-white"type="email" placeholder="Enter your email id"></input>
                <input className="text-black outline-none border-2 mt-4 border-emerald-600 bg-transparent rounded-full text-xl py-3 px-5 placeholder:text-white" type="password" placeholder="Enter your password"></input>
                <button className="text-white outline-none bg-emerald-600 border-none rounded-full text-xl py-3 px-5 placeholder:text-white">Login</button>
            </form> 
        </div>
    </div>
  )
}

export default Login