import React, {useState, useContext} from 'react';
import axios from 'axios';
import { AuthContext } from '../service/AuthContext';


const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {saveUser} = useContext(AuthContext);

    const handleSubmit = (e) =>{
      //PARSE PASSWORD FOR SECURITY
        e.preventDefault()
        // console.log(email);
        // console.log(password);
    }


    // axios.post(`http://localhost:8083/api/auth/login`,{
    //   email, password
    // })
    // .then(res => {
    //     console.log(res);
    //     console.log(res.data)
    // })
    // .catch(error => console.log(error));

const handleLogin = async() => {
   axios({
  method: 'post',
  url: 'http://localhost:8083/api/auth/login',
  data: {
    username, password
  }
  }).then((response) => {
    if(response.data === "User Login Successful"){
      // console.log(username)
      saveUser(username);
    }
  }).catch(err => console.log(err));
}


  return (
    <div className='auth-form-container'>
     {/* <h2>Login</h2>    */}
    <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Client Name</label>
        {/* onChange allows the user to see what they are typing */}
        <input type='text' placeholder='Enter Client Name' id='username' name='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>

        <label htmlFor="password">Password</label>
        <input type='password' placeholder='***********' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>

        <button onClick={handleLogin}>Login</button>
    </form>

    <button className="link-btn" onClick={() => props.onFormSwitch('register')} > Register </button>
        
    </div>



  )
}

export default Login;