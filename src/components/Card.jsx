import React from "react";
import "../App.css";

function Card(props) {
  return (
    <div className="card">
      <p>{props.name}</p>
      <p>{props.state}</p>
      <p>FullStack</p>
      <p>I am a FullStack software developer</p>
    </div>
  );
}

export default Card;
