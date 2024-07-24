import React from "react";
import { Outlet } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import Tags from "../Tags/tags";

function Homepage() {
    return (
        <div>
            {/* <Carousel /> */}
            {/* <Tags /> */}
            <Outlet />
        </div>
    );
}

export default Homepage;
