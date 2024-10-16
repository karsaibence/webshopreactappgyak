import React from 'react'
import Kartya from '../kartya/Kartya'
import "./kartyak.css"

const Kartyak = ( props ) => {
    function clickedEvent( adat ) {
        props.fn(adat)
    }

    return (
        <div className='cards'>
            {
                props.termekek.map( ( e, i ) => {
                    return <Kartya key={i} name={e.name} url={e.url}
                        leiras={e.leiras} price={e.price} index={i} fn={clickedEvent} />
                } )
            }
        </div>
    )
}

export default Kartyak