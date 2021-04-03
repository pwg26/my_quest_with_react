import React from "react";
import CardBtns from "../CardBtns";

import CardDescription from "../CardDescription";

import CardImage from "../CardImage";

import "../style.css";

function Card() {
  return (
    // The most straightforward solution would be to add the Consumer to the Card component.
    // This way, all Card components can have the Card context passed directly as props

    <div className="card h-100">
      <CardImage />
      <div className="card-body">
        {/* <CardHeading /> */}
        <CardDescription />
        <div className="d-grid gap-2">
          <CardBtns />
        </div>
      </div>
    </div>
  );
}

export default Card;
