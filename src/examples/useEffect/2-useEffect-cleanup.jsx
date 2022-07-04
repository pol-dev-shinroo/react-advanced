import React, { useEffect, useState } from "react";

const Cleanup = () => {
    const [size, setSize] = useState(window.innerWidth);

    const sizeHandler = () => {
        setSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", sizeHandler);
        console.log("only once");
        return () => {
            window.removeEventListener("resize", sizeHandler);
        };
    });
    return (
        <>
            <h1>Screen Size</h1>
            <h2>Size: {size}</h2>
        </>
    );
};

export default Cleanup;
