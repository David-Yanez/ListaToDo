import React from 'react'
import  CheckSVG  from '../assets/check.svg';
import DeleteSVG from '../assets/delete.svg';


//import {ReactComponent as CheckSVGG } from "../assets/check.svg"

/* <div>
         <img src={CheckSVG}  alt="icon check" />
         <img src={DeleteSVG} className={`Icon Icon-svg Icon-${type}`} alt="icon delete" />
         </div> */
const iconTypes = {
  "check": CheckSVG,
  "delete": DeleteSVG
}


export const TodoIcon = ({type, onClick}) => {
  return (
    <img src={iconTypes[type]} className={`Icon Icon-${type}`} onClick={onClick} alt="icon check" />
         )
  
}
