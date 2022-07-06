import React, { useEffect, useState } from "react";

const Item = () => {
    const [size, setSize] = useState(window.innerWidth);
    const checkSize = () => {
        setSize(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", checkSize);
        // cleanup function
        return () => {
            window.removeEventListener("resize", checkSize);
        };
    }, []);
    return (
        <div style={{ marginTop: "2rem" }}>
            <h1>window</h1>
            <h2>size: {size}</h2>
            {console.log("render")}
        </div>
    );
};

export default Item;
