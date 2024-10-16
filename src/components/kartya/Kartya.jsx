import React from 'react'
import "./kartya.css"

const Kartya = ( props ) => {
    return (
        <div className='card'>
            <div className="card-header">
                <h4>{props.name}</h4>
            </div>
            <div className="card-img">
                <img src={"/images/"+props.url} alt={props.name} />
            </div>
            <div className="card-description">
                <p>{props.leiras}</p>
                <div className='kosarba-tesz'>
                    <button>Vásárlás</button>
                    <h6>Ár: {props.price}Ft</h6>
                </div>
            </div>
        </div>
    )
}

export default Kartya