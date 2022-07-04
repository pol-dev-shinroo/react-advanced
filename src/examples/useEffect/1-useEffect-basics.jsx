import React, { useEffect, useState } from "react";

const Basics = () => {
    const [value, setValue] = useState(0);

    // instead:
    useEffect(() => {
        if (value > 0) {
            document.title = `New ${value}`;
        }
        console.log("whenever value changes");
    }, [value]);

    useEffect(() => {
        console.log("every time component renders");
    });

    useEffect(() => {
        console.log("only for the initial render");
    }, []);

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
