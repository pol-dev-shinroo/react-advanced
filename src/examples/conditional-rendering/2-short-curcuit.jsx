import React, { useState, useEffect } from "react";

const ShortCircuit = () => {
    const [text, setText] = useState("sdf");
    const [isError, setIsError] = useState(false);
    // const firstValue = text || "hello world";
    // const secondValue = text && "hello world";
    return (
        <>
            <h1>{text || "john doe"}</h1>
            <button
                className="btn"
                onClick={() => {
                    setIsError(!isError);
                }}
            >
                Click me!
            </button>
            {text && <h1>hello world</h1>}
            {!text && <h1>not hello</h1>}
            {isError && <h1>Error...</h1>}
            {isError ? (
                <p>there is an error... ❌</p>
            ) : (
                <p>there is no error ✅</p>
            )}
        </>
    );
};

export default ShortCircuit;
