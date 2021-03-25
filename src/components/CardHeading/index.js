import React from "react";
import ProjectContext from "../../utils/ProjectContext";

function CardHeading() {
  return (
    <ProjectContext.Consumer>
      {({ title }) => <h5 className="card-title">{title}</h5>}
    </ProjectContext.Consumer>
  );
}

export default CardHeading;

// div class="card-body">
//                 <h5 class="card-title">Note Taker</h5>
//                 <p class="card-text">
//                   A note taking application that ustilizes sql to store user
//                   inputs.
//                 </p>
