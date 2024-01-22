import React, {useContext, useState} from 'react'
import { AuthContext } from '../../service/AuthContext';

const InteractiveHome = () => {
    
    const {user} = useContext(AuthContext);


  return (
    <>
            <div style={{color : 'yellow'}}>Welcome {user}</div>

    </>
  )
}

export default InteractiveHome;