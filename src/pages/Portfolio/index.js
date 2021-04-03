import React, { useState, useEffect } from "react";

import "../../components/style.css";

import ProjectContext from "../../utils/ProjectContext";

import CardContainer from "../../components/CardContainer";

import Hostal from "../../components/images/caro.jpg";
import Urban from "../../components/images/urban.png";
import Weather from "../../components/images/weather.png";
import Password from "../../components/images/password.jpg";

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
              image: Hostal,
              title: "Fitness Tracker",
              description:
                "An application to creating workouts that provided qualatitive and quantative feedback",
              giturl: "https://github.com/pwg26/Unit_Of_Energy_Tracker",
              appurl: "https://fitnessssss.herokuapp.com/",
            }}
          >
            <CardContainer />
          </ProjectContext.Provider>
          <ProjectContext.Provider
            value={{
              image: Hostal,
              title: "Hostal Hedonism",
              description:
                "An application that manages guests, room, and activities",
              giturl: "https://github.com/pwg26/hostel_hedonism",
              appurl: "https://fitnessssss.herokuapp.com/",
            }}
          >
            <CardContainer />
          </ProjectContext.Provider>
          <ProjectContext.Provider
            value={{
              image: Urban,
              title: "Urban El Dorado",
              description:
                "An application that tracks the social standing of an area",
              giturl: "https://github.com/pwg26/RepositoryForAwesomeProject",
              appurl: "https://pwg26.github.io/RepositoryForAwesomeProject/",
            }}
          >
            <CardContainer />
          </ProjectContext.Provider>
          <ProjectContext.Provider
            value={{
              image: Urban,
              title: "Straight Finance",
              description: "A budget tacker",
              giturl: "https://github.com/pwg26/Straight_Finance",
              appurl: "https://pwg26.github.io/RepositoryForAwesomeProject/",
            }}
          >
            <CardContainer />
          </ProjectContext.Provider>
          <ProjectContext.Provider
            value={{
              image: Weather,
              title: "Weather Boy",
              description: "A weather tracking app for a 5 day forecast",
              giturl: "https://github.com/pwg26/GetToKnowTheWeather",
              appurl: "https://pwg26.github.io/GetToKnowTheWeather/",
            }}
          >
            <CardContainer />
          </ProjectContext.Provider>
          <ProjectContext.Provider
            value={{
              image: Password,
              title: "Random Password Generator",
              description: "A customizable password generator",
              giturl: "https://github.com/pwg26/SuperCoolPasswordPicker",
              appurl: "https://pwg26.github.io/SuperCoolPasswordPicker/",
            }}
          >
            <CardContainer />
          </ProjectContext.Provider>
        </div>
      </section>
    </main>
  );
}
export default Portfolio;
