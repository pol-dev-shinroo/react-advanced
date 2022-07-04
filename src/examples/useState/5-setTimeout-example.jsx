import React, { useState } from "react";

export const TimeOut = () => {
    const [value, setValue] = useState(0);
    const valueHandler = () => {
        setTimeout(() => {
            setValue(value + 1);
        }, 2000);
    };

    const [properValue, setProperValue] = useState(0);
    const valueHandlerProper = () => {
        setTimeout(() => {
            setProperValue((prev) => {
                return prev + 1;
            });
        }, 2000);
    };

    const functionApproach = () => {
        setValue((prev) => {
            return prev + 1;
        });
    };
    console.log("component updated");

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={valueHandler}>Decrease</button>
            <h1>{properValue}</h1>
            <button onClick={valueHandlerProper}>Increase</button>
            <h1 onClick={functionApproach}>{value}</h1>
        </div>
    );
};
