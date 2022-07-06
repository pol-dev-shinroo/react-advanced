import React, { useState, useEffect } from "react";
import Item from "./components/Item";

const ShowHide = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button
                className="btn"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide
            </button>
            {show && <Item />}
        </div>
    );
};

export default ShowHide;
