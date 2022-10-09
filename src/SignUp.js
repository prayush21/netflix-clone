import React from 'react'
import { Link } from 'react-router-dom'
import "./SignUp.css"

const SignUp = () => {

    const register = (e) => {
        e.preventDefault();
        alert('reg')
    }

    const signInFunc = (e) => {
        e.preventDefault();
        alert('signin')

    }

  return (
    <div className='signUp'>
        <h1>Sign In</h1>
        <input type="email"  placeholder='Email'/>
        <input type="password"  placeholder='Password'/>
        <button type='submit' onClick={signInFunc}>Sign In</button>
        <h3>New to Netflix? <a onClick={register}>Sign Up Now!</a></h3>
    </div>
  )
}
 
export default SignUp