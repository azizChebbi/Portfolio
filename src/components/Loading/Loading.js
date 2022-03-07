import React from "react";
import Loader from "../../images/loader.svg";
import LoaderDots from "../../images/loaderDots.svg";

function Loading() {
    return (
        <div className="loader">
            <div>
                <img src={Loader} />
                <p>Loading</p>
            </div>
        </div>
    );
}

export default Loading;
