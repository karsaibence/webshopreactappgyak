import React from 'react'
import Kartyak from '../kartyak/Kartyak'
import { termekek } from "../forras/termekek"

const Fooldal = ( props ) => {
    const lista = [];
    function clickedEvent( adat ) {
        lista.push( termekek[ adat ] )
        props.fn( lista )
    }
    return (
        <article>
            <Kartyak termekek={termekek} fn={clickedEvent} />
        </article>
    )
}

export default Fooldal