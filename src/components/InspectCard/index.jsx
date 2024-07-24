import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { loremIpsum } from "lorem-ipsum";
import "./style.css";
import Logo from "./logo";
import moment from "moment";

const URL = "https://666340f262966e20ef0c113d.mockapi.io/";

function InspectCard() {

    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        const shops = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
        switch (shops) {
            case 0:
                return '';
            case 1:
                return 'Avalible in 1 shop';
            default:
                return `Avalible in ${shops} shops`;
        }
    }

    const { id } = useParams();

    const [data, setData] = useState({});

    const [availability, setAvalibility] = useState(getRandomInt(0, 4));

    const [price, setPrice] = useState((Math.random() * 100).toFixed(2))

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

                <div className="x">
                    <button className="backBtn" onClick={() => window.location.replace('/books/')}></button>
                </div>

                <div className="a">
                    <h2>{data.bookName}</h2>
                    <h4>{data.author}</h4>
                </div>

                <div className="b">
                    <img className="fullImg" src={data.cover}></img>

                    <div className="thumb">
                        <img src={data.cover}></img>
                        <img src={data.cover}></img>
                        <img src={data.cover}></img>
                    </div>
                </div>

                <div className="c">
                    <article>
                        {loremIpsum({
                            // count: Math.floor(Math.random() * 10 + 1) + 5,
                            count: 4,
                        })}
                    </article>

                    <button className="toDescription">About book</button>

                    <div className="characteristics">
                        <table className="tableChar">
                            <tbody>
                                <tr>
                                    <th>Serie:</th>
                                    <td>Some serie</td>
                                </tr>
                                <tr>
                                    <th>Publishing:</th>
                                    <td>Some name</td>
                                </tr>
                                <tr>
                                    <th>Circulation:</th>
                                    <td>{(Math.floor(Math.random() * 10) + 10) * 100}</td>
                                </tr>
                                <tr>
                                    <th>Year:</th>
                                    <td>{moment(data.date).format('YYYY')}</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>

                {availability && <div className="d">
                    <div className="commonPart">
                        <div className="topPart">
                            <h2>{`$${price}`}</h2>
                            <div className="avalible">
                                <div className="avalibleImg"></div>
                                <div>Avalible</div>
                            </div>
                            <div className="btnsWrapper">
                                <button className="btnBuy">Buy</button>
                                <button className="bookmark"></button>
                            </div>
                        </div>
                        <div className="bottomPart">
                            <ul>
                                <li>How to get order</li>
                                <li>
                                    <a href="">Buy in the store</a>
                                    <div className="secondStr">{`today, ${moment().format('DD MMMM')}`}</div>
                                </li>
                                <li>
                                    <a href="">Order delivery</a>
                                    <div className="secondStr">{`tomorrow, ${moment().add(1, 'days').format('DD MMMM')}`}</div>
                                </li>
                                <li>
                                    <a href="">Make a reserve</a>
                                    <div className="secondStr">{`till ${moment().add(7, 'days').format('DD MMMM')}`}</div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="avalibleInshops">{availability}</div>

                    <button className="avalibleBtn">View availability</button>

                </div>
                }

                {!availability && <div className="d">
                    <div className="commonPart">
                        <div className="topPart">
                            <h2>{`$${price}`}</h2>
                            <div className="avalible">
                                <div className="unavalibleImg"></div>
                                <div>Unavalible</div>
                            </div>
                        </div>
                    </div>
                    <button className="avalibleBtn">Report receipt</button>
                </div>
                }
            </div>
        </div>
    );
}

export default InspectCard;