import classes from "./CardContent.module.css";
import React from "react";
import Card from "../../ui/card/Card";

const CardContent: React.FC<{
  id: string;
  key: string;
  heading: string;
  content: string;
}> = (props) => {
  return (
    <>
      <Card className={classes.cardClass} key={props.key}>
        <h4>{props.heading}</h4>
        <div>
          <p>{props.content}</p>
        </div>
      </Card>
    </>
  );
};

export default CardContent;
