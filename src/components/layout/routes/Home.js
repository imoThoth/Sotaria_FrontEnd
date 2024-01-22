import React, {useContext, useState} from "react";
import '../../../App.css';
import Login from "../../loginRegister/Login";
import Register from "../../loginRegister/Register";
import { AuthContext } from "../../service/AuthContext";
import InteractiveHome from "./InteractiveHome";
const Home = () => {

    //change form page using ternary operation 
    const [currentForm, setCurrentForm] = useState('login');
    const {isAuthenticated} = useContext(AuthContext);

    console.log(isAuthenticated);


    const toggleForm = (formName) => {
      setCurrentForm(formName);
    }
  
  return (
    <div className="home">
      <div className='App'>
      {
        !isAuthenticated ? (currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />)
         : (<InteractiveHome/> )
      }
      </div>
     
    </div>
  )
}

export default Home;