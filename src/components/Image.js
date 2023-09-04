import React from "react";
import "./Image.css";
function hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="image Description" src={props.heroImg} />
      </div>
      <div className="hero-txt">
        <h1> {props.title}</h1>
        <p> {props.text}</p>
        <a href={props.url} className={props.btnClass}></a>
      </div>
    </>
  );
}

export default hero;
