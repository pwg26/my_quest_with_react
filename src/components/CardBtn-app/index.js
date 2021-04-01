import React from "react";
import "./style.css";
import ProjectContext from "../../utils/ProjectContext";

function CardBtnApp() {
  return (
    // <button onClick={props.onClick} className={`btn btn-dark ${props["data-value"]}`} {...props} />

    <ProjectContext.Consumer>
      {({ appurl }) => (
        <a href={appurl} className="btn btn-dark">
          Deployable Application/Website
        </a>
      )}
    </ProjectContext.Consumer>
  );
}

export default CardBtnApp;
