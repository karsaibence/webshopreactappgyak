import React from 'react'
import NavItem from '../navitem/NavItem'

const Nav = (props) => {
    return (
        <ul>
            {
                props.map((e, i) => {
                    return <NavItem link={props.link} nev={props.nev} />
                })
            }
        </ul>
    )
}

export default Nav