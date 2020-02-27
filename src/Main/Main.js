import React from "react";
import "./Main.css";
import Navbar from "../Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="main-wrapper">
        <h1 id="headline">
          My name is Jeff. <br />
          I design intuitive interfaces. <br />
        </h1>

        {/*<div>
          <img src={JeffImage} alt="coding" id="picture" />
        </div>*/}

        <div id="content">
          <h2>Front End Developer specializing in React development.</h2>
          I started developing software to: identify problems worth solving,
          package complex solutions as simple tools. <br />
          Ambitious to tackle challenges with both like-minded and
          polar-oppostie solvers.
        </div>

        <div id="hook">
          <button type="button">
          <Link to='/projects'>Check out my projects.</Link>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
