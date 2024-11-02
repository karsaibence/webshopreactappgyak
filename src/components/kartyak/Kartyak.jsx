import React from 'react'
import Kartya from '../kartya/Kartya'
import "./kartyak.css"

const Kartyak = (props) => {

    return (
        <div className='cards'>
            {
                props.lista.map((e, i) => {
                    return <Kartya key={i} obj={e} />
                })
            }
        </div>
    )
}

export default Kartyak