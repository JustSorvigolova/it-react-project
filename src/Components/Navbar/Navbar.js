import React from "react"
import nav from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
 return  (
  <nav className={nav.nav}>
  <div>
  <NavLink className={nav.item} to='/profile' activeClassName={nav.active}>Profile</NavLink></div>
  <div >
  <NavLink  className={nav.item} activeClassName={nav.active}to='/dialogs'>Messages</NavLink></div>

   <div >
  <NavLink  className={nav.item} activeClassName={nav.active}to='/users'>Users</NavLink></div>

  <div>
  <NavLink className={nav.item} to='/users'>News</NavLink></div>
  <div >
  <NavLink className={nav.item} to='login'>Login</NavLink></div>
  <div >
  <NavLink className={nav.item} to='#'>Settings</NavLink></div>
  </nav>);
    }

export default Navbar;