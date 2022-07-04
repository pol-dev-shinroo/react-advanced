import React, { useEffect, useState } from "react";

const Basics = () => {
    const [value, setValue] = useState(0);
    // useEffect hook cannot be called conditionally!!!
    if (value > 0) {
        useEffect(() => {
            document.title = `New ${value}`;
        });
    }

    // instead:
    useEffect(() => {
        if (value > 0) {
            document.title = `New ${value}`;
        }
    });

    const valueHandler = () => {
        setValue((prev) => {
            return prev + 1;
        });
    };
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={valueHandler}>click me</button>
        </div>
    );
};

export default Basics;
