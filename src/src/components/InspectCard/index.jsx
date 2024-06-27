import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { loremIpsum } from "lorem-ipsum";
import "./style.css";
import moment from "moment";


const URL = "https://666340f262966e20ef0c113d.mockapi.io/";

function InspectCard() {
    const { id } = useParams();

    const [data, setData] = useState({});

    async function getData() {
        const res = await axios(`${URL}gallery/${id}`);
        return res.data;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataObject = await getData();
                setData(dataObject);
            } catch (e) {
                console.error("Error fetching data", e);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bookItem">
            <h2>{data.bookName}</h2>
            <h3>{data.author}</h3>
            {/* <div className="desc"> */}
            <img src={data.cover} className="description"></img>
            <p className="description">
                {loremIpsum({
                    count: Math.floor(Math.random() * 10 + 1) + 5,
                })}
            </p>
            <p className="description company">{data.editionCompany}</p>
            <p className="description">{data.editionCountry}, {moment(data.date).format('YYYY')}</p>
            {/* </div> */}
            <Link className="link" to={"/books/"}>
                Back
            </Link>
        </div>
    );
}

export default InspectCard;