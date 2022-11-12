import React from 'react'
import style from "./PropertysStyle.module.css";
const Button = ({text}) => {
  return (
   <button className={style.myButton}>{text}</button>
  )
}

export default Button