import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
  const[user,setUser] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    mobileNumber:"",
    confirmPassword:"",
    profilePicture:null
  }
  )
  const handleSubmit = async (event) => {
    try{
      event.preventDefault();
      const formData = new FormData();
      Object.entries(user).forEach(([key,value])=>{
        formData.append(key, value);
      })
      const res =  await axios.post('http://localhost:9000/auth/register', formData)
      console.log(res);
    }
    catch(err){
      console.log(err);
    }
    }
    
    const handleChange = (e) =>{
      const { name ,value} = e.target;
      setUser({
        ...user,
        [name] : value
      })
    } 
  const handleFileChange = (e)=>{
    const file = e.target.files[0];
    setUser({
      ...user,
      profilePicture:file
    })
  }
    return (
      <div>
      <h2>Register</h2>
      <form>
        <input
          type='text'
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          placeholder='First Name'
        />
        <input
          type='text'
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          placeholder='Last Name'
        />
        <input
          type='text'
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder='Email'
        />
        <input
          type='text'
          name="mobileNumber"
          value={user.mobileNumber}
          onChange={handleChange}
          placeholder='Mobile Number'
        />
        <input
          type='password'
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder='Password'
        />
        <input
          type='password'
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          placeholder='confirm Password'
        />
        {/* Use type='file' for file uploads */}
        <input
          type='file'
          accept='image/*'
          name='profilePicture'
          onChange={handleFileChange}
          placeholder=''
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
    );
  };
  export default Register;