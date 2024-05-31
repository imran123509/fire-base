
import React, {useState} from "react";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {app} from "../firebase";

const auth=getAuth(app);
const signUpPage = () =>{

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail]= useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword]= useState("");
    const createUser=()=>{
          createUserWithEmailAndPassword(auth, email, password).then((value)=> alert("success"))
    }
    return (
         <div className="signup-page">
               <label>email</label>
               <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" required placeholder="Enter your Email Here" />
               <label>Password</label>
               <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" required  placeholder="Enter your password Here" />
               <button onClick={createUser}>sign Up</button>
         </div>
    );
};

export default signUpPage