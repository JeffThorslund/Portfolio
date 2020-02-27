import React from "react";
import "./Frame.scss";

const Frame = props => {
  return (
    <div className="frame-wrapper" id={props.ident}>
      <div className="foreground">
        <h1 id="title">{props.title}</h1>
        <h2 id="desc">{props.desc}</h2>
        <div id="code">See Code</div>
        <div id="deploy">Deploy</div>
      </div>
    </div>
  );
};

export default Frame;
