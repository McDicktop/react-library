import React from "react";
import { Outlet } from "react-router-dom";

function Homepage() {
    return (
        // <div className="books_container">
        <div>
            <Outlet />
        </div>
    );
}

export default Homepage;
