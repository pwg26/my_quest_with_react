import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Travel from "./pages/travel_home";
// import Portfolio from "./pages/portfolio";
// import Contact from "./pages/contact";
// import Sayulita from "./pages/sayulita";
// import Munich from "./pages/munich";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/travel" component={Travel} />
          <Route exact path="/sayulita" component={Sayulita} />
          <Route exact path="/munich" component={Munich} />
          <Route exact path="/contact" component={Contact} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
