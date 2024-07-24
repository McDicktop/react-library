import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import FilterNav from "./filterNav";
import Tags from "../Tags/tags";
import "./style.css";

const URL = "https://666340f262966e20ef0c113d.mockapi.io/";
const AMOUNT_PER_PAGE = 16;

function GridView() {
    const [data, setData] = useState([]);
    //   const [data, setData] = useState(Array.from(Array(100).keys()));
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [paginatedData, setPaginatedData] = useState([]);
    const [filter, setFilter] = useState(null);

    async function getData() {
        const res = await axios(URL + "gallery");
        return res.data;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataArr = await getData();
                setData(dataArr);
            } catch (e) {
                console.error("Error fetching data", e);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const filterData = () => {
            let filtered = search
                ? data.filter((el) =>
                    el.bookName.toLowerCase().includes(search.toLowerCase())
                )
                : data;


            switch (filter) {
                case "up":
                    filtered = [...filtered].sort((a, b) => a.bookName.localeCompare(b.bookName));
                    break;
                case "down":
                    filtered = [...filtered].sort((a, b) => b.bookName.localeCompare(a.bookName));
                    break;
                default:
                    break;
            }

            setFilteredData(filtered);
            setPaginatedData(
                filtered.slice(
                    AMOUNT_PER_PAGE * (page - 1),
                    AMOUNT_PER_PAGE * page
                )
            );
        };

        filterData();
    }, [data, search, filter, page]);

    function handleUpdateDataBySearch(query) {
        setSearch(query);
        setPage(1);
    }

    function handleFilterData(param) {
        setFilter(param);
        setPage(1);
    }

    function handleTagsData() {

    }

    return (
        <div className="libWrapper">
            <FilterNav
                handleSearch={handleUpdateDataBySearch}
                handleFilter={handleFilterData}
            />

            <Tags
                handleTags={handleTagsData}
                totalData={data}
            />

            <ul className="grid_wrapper">
                {paginatedData.length &&
                    paginatedData.map((el, index) => (
                        <li key={`ind_${index}`} className="bookWrapper" onClick={(e) => {
                            if (!e.target.classList.contains('view_btn')) {
                                window.location.replace(`/books/${el.id}`)
                            }
                        }}>
                            <img
                                className="bookCover"
                                src={el.cover}
                                alt="image_view"
                            />
                            <div className="info">
                                <p className="bookname">{el.bookName}</p>
                                <p className="author">{el.author}</p>
                                <p className="price">{`$${el.price}`}</p>
                            </div>

                            {/* <Link to={`/books/${el.id}`} className="readBtn">Text</Link> */}
                            {/* <p onClick={() => window.open(`/books/${el.id}`)}>View</p> */}
                            <div className="view_btn" onClick={() => window.open('https://www.ilovepdf.com/')}></div>
                            {/* <p onClick={() => window.location.replace('https://www.ilovepdf.com/')}>View</p> */}
                        </li>
                    ))}
            </ul>

            <ul className="pagination_list">
                {Array.from({
                    length: Math.ceil(filteredData.length / AMOUNT_PER_PAGE),
                }).map((_, index) => {
                    return (
                        <li
                            className={`pagination_item ${index === page - 1 ? "active" : ""
                                }`}
                            onClick={(e) => {
                                setPage(index + 1);
                            }}
                            key={`pagination_list_item_${index}`}
                        >
                            {index + 1}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default GridView;
