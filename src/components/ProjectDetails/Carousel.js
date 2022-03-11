import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../../css/project.css";
function CarouselComponent({ images }) {
    return (
        <>
            <Carousel>
                {images.map((image) => (
                    <div>
                        <img src={image} alt="image" />
                    </div>
                ))}
            </Carousel>
        </>
    );
}

export default CarouselComponent;
