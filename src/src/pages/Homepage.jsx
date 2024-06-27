import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

function Homepage() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const URL = "https://666340f262966e20ef0c113d.mockapi.io/";

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
            {data.map((el, ind) => {
                return (
                    <div className="bookWrapper" key={`ind_${ind}`}>
                        <img
                            className="bookCover"
                            src={el.cover}
                            alt="image_view"
                        />
                        <div className="info">
                            <p className="bookname">{el.bookName}</p>
                            <p className="author">{el.author}</p>
                        </div>

                        {/* <button className="readBtn">READ</button> */}
                        <Link to={`/book/${el.id}`}>READ</Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Homepage;
