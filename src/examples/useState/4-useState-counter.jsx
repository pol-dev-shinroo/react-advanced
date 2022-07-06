import React, { useState } from "react";

const UseStateCounter = () => {
    const [value, setValue] = useState(0);
    const reset = () => {
        setValue(0);
    };
    const complexIncrease = () => {
        setTimeout(() => {
            // setValue(value + 1);
            setValue((prevState) => {
                return prevState + 1;
            });
        }, 3000);
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
                        setTimeout(() => {
                            setValue(value + 1);
                        }, 2000);
                    }}
                >
                    increase
                </button>
            </section>
            {/* timeout example */}
            <section style={{ margin: "4rem 0" }}>
                <h2>more complex counter</h2>
                <h1>{value}</h1>
                <button onClick={complexIncrease}>increase later</button>
            </section>
        </>
    );
};

export default UseStateCounter;
