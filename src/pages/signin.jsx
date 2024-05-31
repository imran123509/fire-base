import React, {useState} from 'react'
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { app } from '../firebase';
const auth=getAuth(app);
function signin() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail]=useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword]=useState("")

    const signinUser=()=>{
          signInWithEmailAndPassword(auth, email, password).then((value)=> console.log("signin success"))
          .catch((err)=> console.log(err +  "something went error"))
    }
  return (
    <div className='signin-page'>
        <h1>sign in pages </h1>
        <label>Enter your Email</label>
        <input onChange={(e)=> setEmail(e.target.value)} value={email} type='email' placeholder='enter ur email' /> 
        <label>Enter your password</label>
        <input onChange={(e)=> setPassword(e.target.value)} value={password} type='password' placeholder='enter ur password' />
        <button onClick={signinUser}>sign in me</button>
    </div>
  )
}

export default signin
