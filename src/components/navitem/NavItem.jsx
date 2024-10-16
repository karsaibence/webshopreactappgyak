import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ( props ) => {
    return (
        <li>
            <Link to={props.link}>{props.nev}</Link>
        </li>
    )
}

export default NavItem