import React from "react";
import Navbar from "../Navbar/Navbar";
import Frame from "./Frame";
import "./Projects.css";

const Project = () => {
  const title = ["Taskit", "Landing Page", "Crazy", "Another One"];
  const descs = [
    "Assign tasks and track deadlines in a dead-simple interface.",
    "A clean landing page that grips a client from landing to onboarding.",
    "Project 1",
    "Project 4"
  ];
  let FrameArr = [];

  for (let i = 0; i < 4; i++) {
    let key = "frame" + i;
    FrameArr.push(<Frame title={title[i]} desc={descs[i]} ident={key} />);
  }

  return (
    <div>
      <Navbar />
      <div className="centering">
        <h1 id="title"> Projects </h1>
        <div className="projects-wrapper">{FrameArr}</div>
      </div>
    </div>
  );
};

export default Project;
