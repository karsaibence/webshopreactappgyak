import React from 'react'
import Kartyak from '../components/kartyak/Kartyak'
import { termekek } from "../components/forras/termekek"

const Fooldal = ( props ) => {
    function clickedEvent( adat ) {
        props.fn( termekek[ adat ] )
    }
    return (
        <article>
            <Kartyak termekek={termekek} fn={clickedEvent} />
        </article>
    )
}

export default Fooldal