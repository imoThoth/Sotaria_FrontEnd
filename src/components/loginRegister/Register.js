import React, {useState} from 'react';
import axios from 'axios';
import Login from './Login';
import { redirect } from "react-router-dom";

const Register = (props) => {

    const [clientEmail, setClientEmail] = useState("");
    const [password, setPassword] = useState("")
    const [clientName, setClientName] = useState("")
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        //Encrypt password
        // console.log(clientEmail);
        // console.log(password);
    }

    
const handleRegister = async() => {
  axios({
 method: 'post',
 url: 'http://localhost:8083/api/auth/register',
 data: {
   clientName, clientEmail, password
 }
 }).then((response) => {
  console.log(response.data)
    loader(response.data);
 }).catch(err => console.log(err));
}

//TODO redirect does not work
const loader = async (response) => {
  var check = response === "User Succesfully Registered"
  console.log(`check was ${check}`)
  if(response === "User Succesfully Registered"){
    new Response("", {
      status: 200,
      headers: {
        Location: "/",
      },
    });

  }
}


  return (
    <div className='auth-form-container'>
    {/* <h2>Register</h2> */}
    <form className="register-form" onSubmit={handleSubmit}>

    <label htmlFor="name">Client Name</label>
        {/* onChange allows the user to see what they are typing */}
        <input type='text' placeholder='your name' id='name' name='name' value={clientName} onChange={(e)=>setClientName(e.target.value)}/>

        <label htmlFor="email">Client Email</label>
        {/* onChange allows the user to see what they are typing */}
        <input type='email' placeholder='youremail@provider.com' id='email' name='email' value={clientEmail} onChange={(e)=>setClientEmail(e.target.value)}/>

        <label htmlFor="password">Password</label>
        <input type='password' placeholder='***********' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>

        <button onClick={handleRegister}>Register</button>
    </form>

        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account, Login</button>
    </div>

  )
}

export default Register;