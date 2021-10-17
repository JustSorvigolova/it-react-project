import React from "react";
import  header from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return(
       <header className={header.header}>
<img alt='dsd' src='https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg' />
           <div className={header.loginblock}>
               { props.isAuth ? <div>{ props.login} - <button onClick={props.logout}></button> Log out</div>
                :  <NavLink to={'/login'}>Login</NavLink>}
           </div>
       </header>
  );
}

export default Header;