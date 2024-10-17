import React from 'react'
import Tablazat from '../components/tablazat/Tablazat'
import "./kosar.css"

const Kosar = ( props ) => {
  function vegOsszeg() {
    return props.lista.map( ( e ) => {
      const menny = Number( e.mennyiseg ) || 0;
      const ar = Number( e.price );
      return menny * ar;
    } );
  }

  function listaTartalomEllenorzes() {
    if ( props.lista.length > 0 ) {
      return vegOsszeg().reduce( ( actOsszeg, next ) => actOsszeg + next, 0 );
    } else {
      return 0
    }
  }

  function mennyNoveles( adat ) {
    props.fnN( adat )
  }
  function mennycsokkentes( adat ) {
    props.fnCs( adat )
  }


  return (
    <div>
      <article>
        <Tablazat lista={props.lista} fnN={mennyNoveles} fnCs={mennycsokkentes} />
      </article>
      <div className='vegosszeg'>
        Végösszeg: {listaTartalomEllenorzes()}Ft
      </div>
    </div>
  )
}

export default Kosar