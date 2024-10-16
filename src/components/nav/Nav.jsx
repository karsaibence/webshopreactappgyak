import React from 'react'
import NavItem from '../navitem/NavItem'
import "./nav.css"

const Nav = ( props ) => {
    return (
        <ul>
            {
                props.nav.map( ( e, i ) => {
                    return <NavItem link={e.link} nev={e.nev} key={i} />
                } )
            }
        </ul>
    )
}

export default Nav