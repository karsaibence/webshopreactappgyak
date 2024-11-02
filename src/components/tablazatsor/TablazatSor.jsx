import React, { useContext } from 'react'
import "./tablazatsor.css"
import { KosarContext } from '../../context/KosarbaTesz'

const TablazatSor = ( props ) => {
    const { mennyNoveles, mennycsokkentes } = useContext(KosarContext)
    
    function aratKalkulal() {
        return props.menny * props.ar
    }

    function novel() {
        mennyNoveles(props.id)
    }
    function csokkent() {
        mennycsokkentes(props.id)
    }

    return (
        <tr>
            <td>{props.nev}</td>
            <td><h5><button onClick={() => { csokkent() }}>-</button>{props.menny}
                <button onClick={() => { novel() }}>+</button></h5></td>
            <td><p>{aratKalkulal()}</p></td>
        </tr>
    )
}

export default TablazatSor