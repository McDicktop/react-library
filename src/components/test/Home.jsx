import React from "react";
import { Outlet, Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/1"}>Book 1</Link> <br />
                        <Link to={"/2"}>Book 2</Link> <br />
                        <Link to={"/3"}>Book 3</Link> <br />
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Home;
