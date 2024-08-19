import React, { useEffect, useState } from 'react'
import './Auth.css'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../../Global/Slice'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


const SignUp = () => {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [passErr, setPassErr] = useState("")
    const [role, setRole] = useState("")
    // const User = z.object({
    //     email: z.string().email({message:"please input a valid email"}),
    //     name: z.string(),
    //     role: z.string(),
    //     password: z.string().min(8, {message:"Password must more than 8 characters"})
        
    // })
    // const {register, handleSubmit, formState: {errors}} = useForm({
    //     resolver: zodResolver(User)
    // })
    // const onSubmit =(data)=>{
    //     console.log("SUCCESS", errors)
    //     console.log("SUCCESS", data)
    // }
    
    // const {vendors, buyers} = useSelector((state)=> state.App.users)

    
    const handlePassword =(e)=>{
        const newPassword = e.target.value
        setPassword(newPassword)
        if(password.length <= 8){
            setPassErr("Password must be up to 8 characters")
            
        }else{
           setPassErr("")
        } 
    }
    const dispatch = useDispatch()
    const register=(e)=>{
    e.preventDefault()
    if(!email || !username || !password){
        toast.error("Please fill all fields")
    }else {
        dispatch(signup({username, password, email}))
        Nav("/login")
    }
    
    }
    
    const Nav = useNavigate()
    // const [Buyer, setBuyer] = useState([])
    // const [Vendor, setVendor] = useState([]);

    // // useEffect(()=>{
    // //     console.log(errors.password)
    // // },[errors])
  return (
    <div className='Login'>
        <div className="LoginWrapper">
            <div className="LoginHeader">
                <h2>Sign Up</h2>
            </div>
            <form>
                <input type='name' placeholder='Fullname' onChange={(e)=> setUsername(e.target.value)}  required={true}/>
                <input type='email' placeholder='E-mail' onChange={(e)=> setEmail(e.target.value)} required={true}/>
                
                <select onChange={(e)=> setRole(e.target.value)}>
                    <option value="--vendor/buyer--"> --vendor/buyer--</option>
                    <option value="buyer">buyer</option>
                    <option value="vendor">vendor</option>
                </select>
                <input type='password' placeholder='Password' onChange={handlePassword} required={true}/> 
                
                {
                    passErr ? <p>{passErr} </p>  : null
                }
            </form>
           <div className="Authbutton">
           <button className='transparent'onClick={register}>
                Sign Up as Buyer
            </button>
           <button type='submit' onClick={()=> Nav("/login")}>
                Sign Up as Vendor
            </button>
           </div>
            <div className="Already">
                <h4>Forgot Password?</h4>
            </div>
            <div className="Already">
                <p>Already have an account? <span onClick={()=> Nav("/login")}>Sign in</span></p>
            </div>
        </div>
        <Toaster/>
    </div>
  )
}

export default SignUp
