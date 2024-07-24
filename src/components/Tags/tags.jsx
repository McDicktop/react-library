import React, { useEffect, useState } from "react";
import "./style.css";

const INITIAL_TAG = ["licensed", "steel", "plastic", "wooden", "rubber", "cotton"];

function Tags({ handleTags, totalData }) {
    const [isTagAdd, setIsTagAdd] = useState(false);
    const [currentTag, setCurrentTag] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);
    const [taggedData, setTaggedData] = useState([]);

    useEffect(() => {
        if (isTagAdd) {
            setTaggedData([
                ...taggedData,
                ...totalData.filter((el) =>
                    el.bookName.toLowerCase().includes(currentTag)
                ),
            ]);
        } else {
            setTaggedData(
                taggedData.filter(
                    (el) => !el.bookName.toLowerCase().includes(currentTag)
                )
            );
        }
    }, [selectedTags]);

    useEffect(() => {
        console.log(taggedData);
    }, [taggedData]);

    return (
        <ul className="tags">
            {INITIAL_TAG.map((el, ind) => {
                return (
                    <li
                        key={`ind_${ind}`}
                        onClick={(e) => {
                            if (e.target.className === "tag") {
                                e.target.className = "tag selectedTag";
                                setSelectedTags([
                                    ...selectedTags,
                                    e.target.innerHTML,
                                ]);
                                setIsTagAdd(true);
                            } else {
                                e.target.className = "tag";
                                setSelectedTags(
                                    selectedTags.filter(
                                        (el) => el !== e.target.innerHTML
                                    )
                                );
                                setIsTagAdd(false);
                            }
                            setCurrentTag(e.target.innerHTML);
                        }}
                        className="tag"
                    >
                        {el}
                    </li>
                );
            })}
        </ul>
    );
}

export default Tags;
