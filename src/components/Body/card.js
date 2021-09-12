import React from "react";

const Card = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div
        style={{
          backgroundImage: `url(${props.image})`,
          width: "300px",
          height: "180px",

          backgroundSize: "300px",
        }}
      ></div>
    </div>
  );
};

export default Card;
