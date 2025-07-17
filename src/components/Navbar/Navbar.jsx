import React, { useState } from "react";
import {assets} from '../../assets/assets';
import style from './Navbar.module.css';
import {Link} from 'react-router-dom'

const Navbar = ({setShowLogin}) => {

    const[menu, setMenu] = useState("home");

  return <div className={style.navbar}>
    <Link to="/"><img className={style.logo} src={assets.logo} alt="DelightLogo" /></Link>
    <ul>
        <Link to='/' onClick={()=>{setMenu("home")}} className={menu === "home"?`${style.active}`:""}>home</Link>
        <a href="#explore_menu" onClick={()=>{setMenu("menu")}} className={menu === "menu"?`${style.active}`:""}>menu</a>
        <a href="#app_download" onClick={()=>{setMenu("mobile-app")}} className={menu === "mobile-app"?`${style.active}`:""}>mobile-app</a>
        <a href="#footer" onClick={()=>{setMenu("contact-us")}} className={menu === "contact-us"?`${style.active}`:""}>contact us</a>
    </ul>
    <div className={style.navbar_right}>
        <img src={assets.search_icon} alt="" />
        <div className={style.navbar_search_icon}>
            <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
            <div className={style.dot}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
    </div>

  </div>;
};

export default Navbar;
