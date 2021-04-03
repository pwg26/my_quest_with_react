import React from "react";
import "./style.css";
import ProjectContext from "../../utils/ProjectContext";

function CardBtnGit() {
  return (
    // <button onClick={props.onClick} className={`btn btn-dark ${props["data-value"]}`} {...props} />
    <ProjectContext.Consumer>
      {({ giturl, appurl }) => (
        <div className="d-grid gap-2">
          <a href={giturl} className="btn btn-dark">
            GitHub
          </a>
          <a href={appurl} className="btn btn-dark">
            Deployable Application/Website
          </a>
        </div>
      )}
    </ProjectContext.Consumer>
  );
}

export default CardBtnGit;
