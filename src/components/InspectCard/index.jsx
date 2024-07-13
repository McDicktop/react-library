import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { loremIpsum } from "lorem-ipsum";
import "./style.css";
import Logo from "./logo";

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
        <div className="libWrapper">
            <Logo />

            <div className="container">
                {/* <div className="imgChild" style={ {backgroundImage: `"url(" + ${data.cover} + ")"`} }> */}

                <div className="imgChild">
                    <img src={data.cover}></img>
                </div>

                <div className="descriptionChild">
                    <h2>{data.bookName}</h2>
                    <h4>{data.author}</h4>
                    <h3>
                        {loremIpsum({
                            // count: Math.floor(Math.random() * 10 + 1) + 5,
                            count: 2,
                        })}
                    </h3>
                </div>
            </div>

            <div className="linkWrapper">
                <Link className="link" to={"/books/"}>
                    Back
                </Link>
            </div>
        </div>
    );
}

export default InspectCard;
