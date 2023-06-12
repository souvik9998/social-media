import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
  const[user,setUser] = useState({
    email:"",
    password:""
  }
  )
  const handleChange = (e) =>{
    const { name ,value} = e.target;
    setUser({
      ...user,
      [name] : value
    })
  } 
  const handleSubmit = async() =>{
    const { email, password } = user
    if(email && password ){
      return await axios.post('http://localhost:4000/auth/login',user).then(res=> console.log(res))
    }
    else{
      alert("invalid input");
    }
  }
  return (
    <div>
        <form>
            <input type='text' name="email" value = {user.email} onChange={handleChange} placeholder='Email adress'></input>
            <input type='password' name="password" value = {user.password} onChange={handleChange} placeholder='password'></input>
            <button onClick={handleSubmit}>Login</button>
            <Link to='/register'><button>signup</button></Link>
        </form>
    </div>
  )
}

export default Login
