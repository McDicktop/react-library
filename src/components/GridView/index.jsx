import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const URL = "https://666340f262966e20ef0c113d.mockapi.io/";

function GridView() {
    const [data, setData] = useState([]);

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

    return (
        <div className="libWrapper">
            {data.length &&
                data.map((el, ind) => {
                    return (
                        <div key={`ind_${ind}`} className="bookWrapper">
                            <img
                                className="bookCover"
                                src={el.cover}
                                alt="image_view"
                            />
                            <div className="info">
                                <p className="bookname">{el.bookName}</p>
                                <p className="author">{el.author}</p>
                            </div>

                            <Link to={`/books/${el.id}`} className="readBtn">
                                View
                            </Link>
                        </div>
                    );
                })}
        </div>
    );
}

export default GridView;
