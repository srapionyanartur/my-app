import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return   <nav  className = {classes.nav}>
<div>
    <div className = {classes.item}>
      <NavLink to = "/profile" activeclassname = {classes.active}> Profile </NavLink>
    </div>
    <div className = {classes.item}>
      <NavLink to = "/dialogs" activeclassname = {classes.active}> Messages </NavLink>
    </div>
    <div className = {classes.item}>
      <NavLink to = "/news" activeclassname = {classes.active}> News </NavLink>
    </div>
    <div className = {classes.item}>
      <NavLink  to = "/music" activeclassname = {classes.active}> Music </NavLink>
    </div>
    <div className = {classes.item}>
      <NavLink to = "/settings" activeclassname = {classes.active}> Settings </NavLink>
    </div>
</div>
    </nav>

}

export default Navbar;