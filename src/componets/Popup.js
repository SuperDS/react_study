import React from "react";
import Home from "./Home";
import Boards from "./Boards";
import Card from "./Card";

import "./Popup.css";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h2 className="widget-name">Profile Widget</h2>
        <br></br>
        {/* <div className="wgroup"> */}
        <Boards>
          <button className="widget01" onClick={() => props.setTrigger(false)}>
            widget01
          </button>
          <button className="widget01" onClick={() => props.setTrigger(false)}>
            widget02
          </button>
          <button className="widget01" onClick={() => props.setTrigger(false)}>
            widget03
          </button>

          <Card
            id="card-1"
            className="card"
            draggable="true"
            offTrigger={() => props.setTrigger(false)}
          >
            <p>Widget One</p>
          </Card>
          <Card
            id="card-1"
            className="card"
            draggable="true"
            offTrigger={() => props.setTrigger(false)}
          >
            <p>Widget Two</p>
          </Card>
          <Card
            id="card-1"
            className="card"
            draggable="true"
            offTrigger={() => props.setTrigger(false)}
          >
            <p>Widget Three</p>
          </Card>
        </Boards>

        {/* </div> */}
        <br></br>
        <div className="widget-text">Set your Onit!</div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
