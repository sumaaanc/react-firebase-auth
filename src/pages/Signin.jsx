import React,{useState} from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { fireapp } from '../firebase'

const auth = getAuth(fireapp)

function Signin() {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const loginUser = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(res => alert("user logged in"))
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
      <button onClick={loginUser}>Sign In</button>
    </div>
  )
}

export default Signin
