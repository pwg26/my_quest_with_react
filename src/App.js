import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";
// import Travel from "./pages/Travel_Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
// import Sayulita from "./pages/Sayulita";
// import Munich from "./pages/Munich";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />

          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
