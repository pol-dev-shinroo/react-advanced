import React, { useState } from "react";

export const UseStateBasics = () => {
    console.log(useState()); // returns an array [undefined, f]
    console.log(useState(1)[0]); // returns value
    console.log(useState(1)[1]); // returns function

    const [value, setText] = useState("hello world"); // destructuring an array
    console.log(value, setText);

    const handleClick = () => {
        if (value === "hello world") {
            setText("babo");
        } else {
            setText("hello world");
        }
    };

    console.log("component rendered"); // buttonclicked=> re-renders the component
    return (
        <React.Fragment>
            <h1>{value}</h1>
            <button type="button" onClick={handleClick}>
                Click me!
            </button>
        </React.Fragment>
    );
};
