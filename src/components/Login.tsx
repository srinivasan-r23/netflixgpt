import React, { useState } from 'react'
import Header from './Header'

type LoginProps = {

}

function Login(props: LoginProps) {
const [isSigninForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSigninForm);
}

  return (
    <>
    <Header />
    <div className='relative w-[100vw] h-[100vh] flex items-center justify-center'>
      <img className="w-full h-full object-cover" alt="bg" src="https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
   
      <form className='bg-black absolute top-[1/2] p-12 mx-auto text-white rounded-lg bg-opacity-70'>
        <h1 className='font-bold text-3xl py-4'>{isSigninForm ? 'Sign In' : 'Sign Up'}</h1>
        <input type="text" placeholder='Email address' className='bg-gray-800 p-4 my-4 w-full' />
        {!isSigninForm && <input type="text" placeholder='Full Name' className='bg-gray-800 p-4 my-4 w-full' />}
        <input type="password" placeholder='Password' className='bg-gray-800 p-4 my-4 w-full' />
        <button className='p-4 my-6 w-full bg-red-700 rounded-lg'>{isSigninForm ? 'Sign In' : 'Sign Up'}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSigninForm ?  `New to Netflix? Sign Up Now` : 'Already having an account? Login now'}</p>
      </form>
    </div>

   
    </>
  )
}

export default Login