import React, { useEffect, useState } from 'react'
import './Auth.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { buyerLogin } from '../../Global/Slice'
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {
    const Nav = useNavigate()

    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [passErr, setPassErr] = useState("")

    const handlePassword =(e)=>{
        const newPassword = e.target.value
        setPassword(newPassword)
        if(password <= 0){
            setPassErr("Password must be up to 8 characters")
            
        }else{
            null
        }

        
    }
    const dispatch = useDispatch()
    const login=(e)=>{
        e.preventDefault()
        if(!email || !password){
            toast.error("Please fill all fields")
        }else {
            dispatch(buyerLogin({password, email}))
            
            Nav("/buyer")
        }
        
        }

    const isLoggedIn = useSelector((state)=> state)
    useEffect(()=>{
        if (isLoggedIn === true) {
            Nav('/buyer')
        }
    },[])
  return (
    <div className='Login'>
        <div className="LoginWrapper">
            <div className="LoginHeader">
                <h2>Login</h2>
            </div>
            <form>
                <input type='email' placeholder='E-mail' onChange={(e)=> setEmail(e.target.value)} required={true}/>
                <input type='password' placeholder='Password' onChange={(e)=> setPassword(e.target.value)} required={true}/> 
                <>
                {
                    passErr ? <p>{passErr}</p> : null
                }
                </>
            </form>
            <button type='submit' onClick={login}>
                Login
            </button>
            <div className="Already">
                <h4>Forgot Password?</h4>
            </div>
            <div className="Already">
                <p>Don't have an account? <span onClick={()=>Nav("/signup")}>Sign up</span></p>
            </div>
        </div>
        <Toaster/>
    </div>
  )
}

export default Login