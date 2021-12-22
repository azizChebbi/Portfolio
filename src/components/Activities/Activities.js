import React from "react";
import Activity from "./Activity";
import arr from "../../data/activities";
import "../../css/activities.css";

function Activities() {
    return (
        <div className='activities' id='activities'>
            <h1>My Activities</h1>
            <div className='container'>
                {arr.map((object) => (
                    <Activity data={object} />
                ))}
            </div>
        </div>
    );
}

export default Activities;
