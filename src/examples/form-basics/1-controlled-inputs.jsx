import React, { useState, useEffect } from "react";
import List from "./components/List";

// dynmaic object properties
const ControlledInputs = () => {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
    const [people, setPeople] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setPerson({ ...person, [name]: value });
        console.log(person);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (person.firstName && person.email && person.age) {
            const newPerson = {
                ...person,
                id: new Date().getTime().toString(),
            };
            setPeople([...people, newPerson]);
        }
    };

    return (
        <article>
            <form className="form">
                <div className="form-control">
                    <label htmlFor="firstName">Name: </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={person.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={person.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Age: </label>
                    <input
                        type="text"
                        id="age"
                        name="age"
                        value={person.age}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" onClick={handleSubmit}>
                    add person
                </button>
                <List people={people} />
            </form>
        </article>
    );
};

export default ControlledInputs;
