import React, {useState} from 'react'
import {fireapp} from '../firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(fireapp)

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const createUser = () =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(res => alert('success'))
        .catch(err => console.log(err))
    }
  return (
    <div>
      <label htmlFor="email">Email:</label>
      <br />
      <input
       type="email"
       id='email'
       onChange={(e)=> setEmail(e.target.value)}
       value={email} />
      <br />
      <label htmlFor="password">Password:</label>
      <br />
      <input 
      type="password"
      id='password'
      onChange={(e)=> setPassword(e.target.value)}
      value={password}
      />
      <br />
      <br />
      <button onClick={createUser}>Sign Up</button>
    </div>
  )
}

export default Signup
