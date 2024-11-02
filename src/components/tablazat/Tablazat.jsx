import React from 'react'
import TablazatSor from '../tablazatsor/TablazatSor'
import "./tablazat.css"

const Tablazat = ( props ) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Megnevezés</th>
                    <th><h5>Mennyiség</h5></th>
                    <th><p>Ár</p></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.lista.map( ( e, i ) => {
                        return <TablazatSor nev={e.name} menny={e.mennyiseg}
                            ar={e.price} id={e.id} index={i} key={i} />
                    } )
                }
            </tbody>
        </table>
    )
}

export default Tablazat