import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../../css/project.css";
import { useParams } from "react-router-dom";
import data from "../../data";
import CarouselComponent from "./Carousel";

function Project() {
    const { id } = useParams();
    const [project] = useState(() => data.filter((item) => item.id == id)[0]);
    return (
        <div className="project">
            <CarouselComponent images={project.images} />
        </div>
    );
}

export default Project;
/* hello aziz chebbi*/
