import React, { useState } from "react";

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: "peter",
        age: "24",
        message: "random message",
    });

    const changeMessage = () => {
        if (person.message === "random message") {
            setPerson({ ...person, message: "new message" });
        } else {
            setPerson({ ...person, message: "random message" });
        }
    };

    return (
        <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button
                type="button"
                onClick={() => {
                    changeMessage(person.message);
                }}
            >
                Change Message
            </button>
        </>
    );
};

export default UseStateObject;
