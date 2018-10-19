import React from "react";
import "./Nav.css";

const Nav = (props) => {

    return (
        <div className="nav container header">
            <div className="row col-md-12">
                <div className="mx-auto">
                    <div className="my-3 px-3 mx-auto rounded head-line">Reaction Time</div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="row col-md-8 mx-auto text-center scoreboard mb-3">
                        <div className="col-md-5 mx-auto my-auto timer">
                            10 seconds!
                        </div>
                        <div className="col-md-5 mx-auto score">
                            {(props.correct)} Correct <br/> {props.highScore} High Score
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;