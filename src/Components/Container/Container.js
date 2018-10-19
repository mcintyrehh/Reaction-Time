import React from "react";
import "./Container.css";

const Container = (props) => <div className="col-md-8 mx-auto d-flex main-contain">{props.children}</div>

export default Container;