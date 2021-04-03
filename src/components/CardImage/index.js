import React from "react";
import ProjectContext from "../../utils/ProjectContext";

function CardImage() {
  return (
    <ProjectContext.Consumer>
      {({ image }) => (
        <img
          className="card-img-top mt-2 por-pic"
          src={image}
          alt="Card image cap"
        />
      )}
    </ProjectContext.Consumer>
  );
}

export default CardImage;
