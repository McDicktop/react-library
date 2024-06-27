import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import

function Bookpage() {

    const [book, setBook] = useState([]);
    const { id } = useParams();


    const URL = "https://666340f262966e20ef0c113d.mockapi.io/";

    async function getData() {
        const res = await axios(URL + "gallery");
        return res.data;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataArr = await getData();
                const item = dataArr.filter(el => el.id === id);
                setBook(item[0]);
            } catch (e) {
                console.error("Error fetching data", e);
            }
        };
        fetchData();
    }, [id]);





    return (
        <>
            {book && (
                <div>
                    {book.bookName}
                    <img
                        className="bookCover"
                        src={book.cover}
                        alt="image_view"
                    />
                </div>
            )}

        </>
    )
}

export default Bookpage;