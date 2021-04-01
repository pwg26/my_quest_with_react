import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import "../../components/style.css";
import "../../images/me.jpg";
import ProjectContext from "../../utils/ProjectContext";
import Card from "../../components/Card";
import CardContainer from "../../components/CardContainer";
import img1 from "../../images/caro.jpg";

function Portfolio() {
  const [projectState, setProjectState] = useState({
    image: "",
    title: "",
    description: "",
    giturl: "",
    appurl: "",
  });
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [giturl, setGiturl] = useState("");
  // // const [ appurl, setAppurl] = useState("");
  // setProjectState({
  //   ...projectState,
  // });

  return (
    <main>
      <section className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-3 mt-4 mb-2 bg-white rounded">
            <h1 className="text-center">Portfolio</h1>
            <h6 className="text-center">
              {/* <a href="assets/Resume.pdf"> Resume</a> */}
            </h6>
          </div>
        </div>
        <div className="d-flex align-items-baseline row justify-content-md-center">
          <ProjectContext.Provider
            value={{
              image: img1,
              title: "Fitness Tracker",
              description:
                "An application to creating workouts that provided qualatitive and quantative feedback",
              giturl: "https://github.com/pwg26/Unit_Of_Energy_Tracker",
              appurl: "https://fitnessssss.herokuapp.com/",
            }}
          >
            <CardContainer />
          </ProjectContext.Provider>
          {/* <ProjectContext.Provider
            value={{
              image: "../../images/caro.jpg",
              title: "Hostal Hedonism",
              description: "An application that manages guests, room",
              giturl: "https://github.com/pwg26/Unit_Of_Energy_Tracker",
              appurl: "https://fitnessssss.herokuapp.com/",
            }}
          >
            <CardContainer />
          </ProjectContext.Provider> */}
        </div>
      </section>
    </main>
  );
}
export default Portfolio;
