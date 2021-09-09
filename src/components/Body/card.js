import React from "react";

const Card = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div style={{ backgroundImage: `url(${props.image})` }}></div>
    </div>
  );
};

export default Card;
