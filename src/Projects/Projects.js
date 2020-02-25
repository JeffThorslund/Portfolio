import React from "react";
import Navbar from "../Navbar/Navbar";
import Frame from "./Frame";
import "./Projects.css";

const Project = () => {
  const descs = [
    "Assign tasks seamlessly with a naturally intuitive tasking system. Elegant tool tips make learning instant",
    "this is two"
  ];
  const skills = ["the first", "the second"];
  let FrameArr = [];

  for (let i = 0; i < 3; i++) {
    let key = "frame" + i;
    FrameArr.push(<Frame desc={descs[i]} skills={skills[i]} ident={key} />);
  }

  return (
    <div>
      <Navbar />
      <div className="projects-wrapper">{FrameArr}</div>
    </div>
  );
};

export default Project;
