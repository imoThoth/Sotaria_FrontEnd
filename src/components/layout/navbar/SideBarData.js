import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import '../../../App.css';


export const SideBarData = [

    {
        title: "Home",
        path: "/",
        icons: <AiIcons.AiFillHome />,
        className: "nav-text"
    },
    {
        title: "Chart",
        path: "/chart",
        icons: <IoIcons.IoIosPaper />,
        className: "nav-text"
    },
    {
        title: "Forum",
        path: "/forum",
        icons: <FaIcons.FaCartPlus />,
        className: "nav-text"
    }
    // ,
//     {
//         title: "Team",
//         path: "/team",
//         icons: <IoIcons.IoMdPeople />,
//         className: "nav-text"
//     },
//     {
//         title: "Messages",
//         path: "/messages",
//         icons: <FaIcons.FaEnvelopeOpenText />,
//         className: "nav-text"
//     },
//     {
//         title: "Support",
//         path: "/support",
//         icons: <IoIcons.IoMdHelpCircle />,
//         className: "nav-text"
//     }
 ]