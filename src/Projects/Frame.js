import React from "react";
import "./Frame.scss";

const Frame = props => {
  return (
    <div className="frame-wrapper" id={props.ident}>
      <div className="section" id="description">
        {props.desc}
      </div>
      <div className="section" id="code">
        See Code
      </div>
      <div className="section" id="deploy">
        Deploy
      </div>
    </div>
  );
};

export default Frame;
