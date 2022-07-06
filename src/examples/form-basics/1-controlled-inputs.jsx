import React, { useState, useEffect } from "react";
import List from "./components/List";

const ControlledInputs = () => {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [people, setPeople] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && email) {
            const person = {
                id: new Date().getTime().toString(),
                firstName,
                email,
            };
            setPeople((prev) => {
                return [...people, person];
            });
            setFirstName("");
            setEmail("");
        }
    };

    useEffect(() => {
        console.log(people);
    }, [people]);
    return (
        <article>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="firstName">Name: </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <button type="submit"> add person</button>
                <List people={people} />
            </form>
        </article>
    );
};

export default ControlledInputs;
