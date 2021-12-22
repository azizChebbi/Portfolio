import React from "react";
import { Button } from "@mui/material";
import "../../css/activity.css";

function Activity({ data }) {
    console.log(data);
    return (
        <div className='activity'>
            <img src={data.image} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <Button variant='contained'>
                <a href={data.link}>See more</a>
            </Button>
        </div>
    );
}

export default Activity;
