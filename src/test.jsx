import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Btn = styled.button`
    background: ${(props) => props.bgColor};
`;

const Test = () => {
    const [myState, setState] = useState("hello world");
    console.log("component did mount");

    useEffect(() => {
        console.log("run only when state changes");
    }, [myState]);

    useEffect(() => {
        console.log("run only once!");
    }, []);

    const changeBtn = () => {
        setState("New");
        console.log("value changed");
    };
    return (
        <>
            <h1>{myState}</h1>
            <Btn bgColor="green" onClick={changeBtn}>
                click me
            </Btn>
        </>
    );
};

export default Test;
