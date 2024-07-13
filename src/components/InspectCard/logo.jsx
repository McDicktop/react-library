// import { useState, useEffect } from "react";
// import "./filterNav.css";
// import "./style.css";

function Logo() {
    // const [query, setQuery] = useState("");
    // const [filter, setFilter] = useState("");

    // useEffect(() => {
    //     handleFilter(filter);
    // }, [filter]);

    return (
        
        <nav className="grid_navigation">
            <div
                className="nav_logo"
                onClick={() => window.location("/books/")}
            ></div>
        </nav>
    );
}

export default Logo;
