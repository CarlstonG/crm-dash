import { useState, useContext } from "react"
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../../firebase"

import "../login/login.scss"
import { useNavigate, Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"



const Signup = () => {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      dispatch({type:"LOGIN", payload:user});
      navigate("/")
    })
    .catch((error)=> {
      setError(true);
    })
  }
  return (
    <div className="login">
         <h1>Sing-Up</h1>
    <form onSubmit={handleLogin}>
   
          <label for="userEmail">Email</label>
          <input type="email" placeholder="email@gmail.com" onChange={e => setEmail(e.target.value)}/>
          <label for="userPassword">Password</label>
          <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
          
          
          <button type="submit" value="Login">Sign Up</button>
          <button type="signUp" onClick={() => {navigate("/login")}}>Back</button>
          
          {error && <span>*Wrong Email or Password</span>}
          
    </form>
    </div>
  )
}

export default Signup