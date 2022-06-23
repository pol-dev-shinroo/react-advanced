import React, { useState } from "react";

const UseStateCounter = () => {
    const [value, setValue] = useState(0);
    const reset = () => {
        setValue(0);
    };
    return (
        <>
            <section style={{ margin: "4rem 0" }}>
                <h2>regular counter</h2>
                <h1>{value}</h1>

                <button
                    type="button"
                    onClick={() => {
                        setValue(value - 1);
                    }}
                >
                    decrease
                </button>
                <button type="button" onClick={reset}>
                    reset
                </button>
                <button
                    type="button"
                    onClick={() => {
                        setValue(value + 1);
                    }}
                >
                    increase
                </button>
            </section>
        </>
    );
};

export default UseStateCounter;
