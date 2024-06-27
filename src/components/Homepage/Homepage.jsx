import React from "react";
import { Outlet } from "react-router-dom";
import "./style.css";

function Homepage() {
    return (
        <div className="books_container">
            <nav>Library store</nav>
            <Outlet />
        </div>
    );
}

export default Homepage;
