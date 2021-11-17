import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Routes";

function Header() {
    return (
        <div>
            {/*// add NavLinks*/}
            <NavLink to={PATH.PRE_JUNIOR}>PRE_JUNIOR</NavLink>
            <NavLink to={PATH.JUNIOR}>JUNIOR</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}>JUNIOR+</NavLink>
        </div>
    )
}

export default Header
