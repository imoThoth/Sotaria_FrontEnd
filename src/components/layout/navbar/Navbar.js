import React, {useContext, useState} from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import {SideBarData} from "./SideBarData";
import '../../../App.css';
import { IconContext } from "react-icons/lib";
import { AuthContext } from "../../service/AuthContext";

const Navbar = () => {

    const [sideBar, setSideBar] = useState(false);
    const {isAuthenticated, user, logout} = useContext(AuthContext)
    const showSideBar = () => {setSideBar(!sideBar)}
    // const [showSideBar, setShowSideBar] = useState(false);

    const handleLogout = () => {
        logout();
    }

  return (
    <>
    {/* set global config for all FA icons */}
     <IconContext.Provider value={{color: "undefined"}}>
        <div className="navbar">
            <Link to="#" className="menu-bars">
                {/* Creates triple stacked icon for nav bar */}
                <div className="link-img">
                <FaIcons.FaBars onClick={showSideBar} />
               </div>
            </Link>
            {
                isAuthenticated ? (     <>
            <div className="right-text">
                        Hello {user}</div>
            <button className="logout" onClick={handleLogout}>Log out</button>
            </>
            ) : <></>
            }
       
        </div>
        <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSideBar}>
                {/* Adds bullet-point */}
                <li className="navbar-toggle"> 
                    <Link to="#" className="menu-bars">
                        {/* Adds X */}
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>

                {SideBarData.map((item, index) => {
                    return (
                        <li key={index} className={item.className}>
                            <Link to = {item.path}>
                                {item.icons}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
     </IconContext.Provider>
    </>
  )
}

export default Navbar