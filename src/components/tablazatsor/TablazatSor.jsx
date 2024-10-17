import React from 'react'
import "./tablazatsor.css"

const TablazatSor = ( props ) => {
    function aratKalkulal() {
        return props.menny * props.ar
    }
    function mennyNoveles() {
        props.fnN( props.id )
    }
    function mennycsokkentes() {
        props.fnCs( props.id )
    }

    return (
        <tr>
            <td>{props.nev}</td>
            <td><h5><button onClick={() => { mennycsokkentes() }}>-</button>{props.menny}
                <button onClick={() => { mennyNoveles() }}>+</button></h5></td>
            <td><p>{aratKalkulal()}</p></td>
        </tr>
    )
}

export default TablazatSor