import React, { useEffect, useState } from "react";

const Basics = () => {
    useEffect(() => {
        document.title = `New ${value}`;
    });

    const [value, setValue] = useState(0);
    const valueHandler = () => {
        setValue((prev) => {
            return prev + 1;
        });
        document.title = `New (${value})`;
    };
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={valueHandler}>click me</button>
        </div>
    );
};

export default Basics;
