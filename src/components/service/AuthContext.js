import {createContext, useContext, useState} from 'react';
import React from 'react';

export const AuthContext = React.createContext();


export const AuthContextProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState("");

    const saveUser = (username) => {

        if(username){
            setUser(username);
            setIsAuthenticated(true);
            console.log(isAuthenticated)
            console.log("User Succesfully Authenticated");


        }
    }

    const logout = () => {
        setIsAuthenticated(false)
    }


  return (
    <AuthContext.Provider value={{saveUser, user, setUser, isAuthenticated, logout}}>
    {children}
  </AuthContext.Provider>
  )
}
