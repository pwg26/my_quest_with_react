import React from "react";
import CardBtn from "../CardBtn";
import CardDescription from "../../utils/CardDescription";
import CardHeading from "../CardDescription";
import "../style.css";

function Card() {
  return (
    // The most straightforward solution would be to add the Consumer to the Card component.
    // This way, all Card components can have the Card context passed directly as props

    <CardContext.Consumer>
      {({ image, handleBtnClick }) => (
        <div className="card">
          {/* Here, we do not pass the title to demonstrate that it can also be consumed from the CardTitleText component */}
          <div className="card-body">
            <CardHeading />
            <CardDescription />

            <CardBtn onClick={handleBtnClick} data-value="app" />
            <CardBtn onClick={handleBtnClick} data-value="git" />
          </div>
        </div>
      )}
    </CardContext.Consumer>
  );
}

export default Card;
