import React from "react";
import { useParams } from "react-router-dom";

function PageTwo() {
    const { id } = useParams();

    return (
        <div>
            <a href="/">Back</a>
            <div>You opened a book with id: {id}</div>
        </div>
    );
}

export default PageTwo;
