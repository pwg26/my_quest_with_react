import React from "react";
import "./style.css";
import ProjectContext from "../../utils/ProjectContext";

function CardBtnGit() {
  return (
    // <button onClick={props.onClick} className={`btn btn-dark ${props["data-value"]}`} {...props} />
    <ProjectContext.Consumer>
      {({ giturl }) => (
        <a href={giturl} className="btn btn-dark">
          GitHub
        </a>
      )}
    </ProjectContext.Consumer>
  );
}

export default CardBtnGit;
