import React from "react";
import "./style.css";

function CardBtn(props) {
  return (
    // <button onClick={props.onClick} className={`btn btn-dark ${props["data-value"]}`} {...props} />

    <button
      onClick={props.onClick}
      className={`btn btn-dark ${props["data-value"]}`}
      {...props}
    />
  );
}

export default CardBtn;
