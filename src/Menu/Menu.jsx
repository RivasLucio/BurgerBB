import React from 'react'
import './Menu.css'
import menu1 from "../../src/assets/img/menu1.jpg";
import menu2 from "../../src/assets/img/menu2.jpg";
import menu3 from "../../src/assets/img/menu3.jpg";
import menu4 from "../../src/assets/img/menu4.jpg";



export const Menu = () => {
  return (
    <div className='menuImg'>
      <img src={menu1} alt="" />
      <img src={menu2} alt="" />
      <img src={menu3} alt="" />
      <img src={menu4} alt="" />
    </div>
  )
}
