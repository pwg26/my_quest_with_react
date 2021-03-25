import React from "react";
import ProjectContext from "../../utils/ProjectContext";

function CardDescription() {
  return (
    <ProjectContext.Consumer>
      {({ description }) => <p className="card-text">{description}</p>}
    </ProjectContext.Consumer>
  );
}

export default CardDescription;
