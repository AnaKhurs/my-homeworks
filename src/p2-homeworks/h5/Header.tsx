import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Routes";
import classes from "./Header.module.css"

function Header() {
    return (
        <div className={classes.header}>
            <NavLink className={ ({isActive}) => isActive ? classes.active : classes.link} to={PATH.PRE_JUNIOR}>PRE-JUNIOR</NavLink>
            <NavLink className={ ({isActive}) => isActive ? classes.active : classes.link} to={PATH.JUNIOR}>JUNIOR</NavLink>
            <NavLink className={ ({isActive}) => isActive ? classes.active : classes.link} to={PATH.JUNIOR_PLUS}>JUNIOR+</NavLink>
            <div className={classes.block}/>
        </div>
    )
}

export default Header
