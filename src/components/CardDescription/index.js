import React from "react";
import ProjectContext from "../../utils/ProjectContext";

function CardDescription() {
  return (
    <ProjectContext.Consumer>
      {({ title, description }) => (
        <>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </>
      )}
    </ProjectContext.Consumer>
  );
}

export default CardDescription;
