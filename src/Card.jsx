import React from "react";

// React components are like custom HTML can we can define custom attributes
// Custom attributes are called properties more often called props

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.src} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
