import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
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
          <Route exact path="/" component={home} />
          <Route exact path="/home" component={home} />
          <Route exact path="/about" component={about} />
          <Route exact path="/travel" component={travel} />
          <Route exact path="/contact" component={contact} />
          <Route exact path="/sayulita" component={sayulita} />
          <Route exact path="/munich" component={munich} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
