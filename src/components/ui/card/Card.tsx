import React from "react";
import classes from "./Card.module.css";

const Card: React.FC<{
  className: string;
  children: React.ReactNode;
  // id: string;
  // key: string;
}> = (props) => {
  return (
    <div
      className={`${classes.card} ${props.className}`}
      >
      {props.children}
    </div>
  );
};
export default Card;
