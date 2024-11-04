import React, { useContext } from "react";
import "./kartya.css";
import { KosarContext } from "../../context/KosarbaTesz";

const Kartya = (props) => {
  const { getKosarItems } = useContext(KosarContext);

  function clickEvent() {
    getKosarItems(props.obj);
  }

  return (
    <div className="card">
      <div className="card-header">
        <h4>{props.obj.name}</h4>
      </div>
        <img
          src={`${process.env.PUBLIC_URL}/forras/${props.obj.url}`}
          alt={props.obj.name}
        />
      <div className="card-description">
        <p>{props.obj.leiras}</p>
        <div className="kosarba-tesz">
          <button onClick={clickEvent}>Vásárlás</button>
          <h6>Ár: {props.obj.price}Ft</h6>
        </div>
      </div>
    </div>
  );
};

export default Kartya;
