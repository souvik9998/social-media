import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
  const[user,setUser] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
  }
  )
  const handleSubmit = async (event) => {
    event.preventDefault();
    return await axios
      .post('http://localhost:9000/auth/register', user)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }
    const handleChange = (e) =>{
      const { name ,value} = e.target;
      setUser({
        ...user,
        [name] : value
      })
    } 
  
    return (
      <div>
        <h2>Register</h2>
        <form>
          <input type='text' name="firstName" value = {user.firstName} onChange={handleChange} placeholder='First Name'></input>
          <input type='text' name="lastName" value = {user.lastName} onChange={handleChange} placeholder='Last Name'></input>
          <input type='text' name="email" value = {user.email} onChange={handleChange} placeholder='Email'></input>
          <input type='password' name="password" value = {user.password} onChange={handleChange} placeholder='password'></input>
          <button onClick={handleSubmit}>submit</button>
        </form>
      </div>
    );
  };
  export default Register;