import React, { useState } from 'react'
import "./Login.css";
import {my_auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import {createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  
  const logintoApp = (e) =>{
    e.preventDefault();

    signInWithEmailAndPassword(my_auth,email, password)
    .then(userCredential=>{
      dispatch(login({
        email: userCredential.user.email,
        uid: userCredential.user.uid,
        displayName: userCredential.user.displayName,
    }))
    
      
    }).catch(error=>alert(error));
  }; 
  const register = () =>{
    if (!name) {
      return alert("Please enter a Full Name")
    }

    createUserWithEmailAndPassword(my_auth, email, password)
    .then((userCredential) =>{
      const user= userCredential.user;
        updateProfile(user,{
          displayName: name,
          photoURL: " ",
        })
        .then(() => {
          console.log("Dispatching login action with:", {
            email: user.email,
            uid: user.uid,
            displayName: name,
          }); 
        
          dispatch(login({
            email: user.email,
            uid: user.uid,
            displayName: name,
        }))
        })
          
        
    }).catch((error)=>alert(error)); 
  }; 



  return (
    <div className="login">
        <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="" />
    
        <form>
            <input value={name} onChange={(e)=> setName(e.target.value)} placeholder= "Enter Full Name (required)" type="text" />
            <input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder= "Enter Email" type="text" />
            <input value={password} onChange={(e)=> setPassword(e.target.value)} placeholder= "Enter Password" type="password" />
            <button type='submit' onClick={logintoApp}>Sign In</button>
        </form>

        <p>Not a Member?
          <span className='login_register' onClick={register}> Register Now</span>
        </p>
    
    
    
    
    </div>
  )
}

export default Login