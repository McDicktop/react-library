import { useState, useEffect } from "react";
import "./filterNav.css";

function FilterNav({ handleSearch, handleFilter }) {
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("");

    useEffect(() => {
        handleFilter(filter);
    }, [filter]);

    return (
        <nav className="grid_navigation">
            <div
                className="nav_logo"
                onClick={(e) => window.location.href("/books/")}
            ></div>
            <div className="nav_search">
                <input
                    type="text"
                    placeholder="Enter something..."
                    className="nav_search__input"
                    id="nav_search__input"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                />
                <button
                    className="nav_search__button"
                    onClick={(e) => {
                        if (query.length > 0) {
                            handleSearch(query);
                        } else {
                            handleSearch(null);
                        }
                    }}
                >
                    Search
                </button>
            </div>
            {/* <ul className="nav_filter"> */}
                <label className="nav_filter">
                    Sort:
                    <select className="select"
                        id="filter_drop"
                        name="filter_drop"
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="">none</option>
                        <option value="up">A-Z</option>
                        <option value="down">Z-A</option>
                    </select>
                </label>
            {/* </ul> */}
        </nav>
    );
}

export default FilterNav;
