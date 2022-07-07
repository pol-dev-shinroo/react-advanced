import React, { useState, useEffect } from "react";
import { data } from "../../../data/data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
    // console.log(useParams());
    const { id } = useParams();
    console.log(typeof id);
    const [firstName, setFirstName] = useState("default name");
    console.log(data);

    useEffect(() => {
        const newPerson = data.find((person) => {
            return person.id === parseInt(id);
        });
        setFirstName(newPerson.firstName);
    }, []);

    return (
        <div>
            <h2>{firstName}</h2>
            <Link to="/people" className="btn">
                Back To People
            </Link>
        </div>
    );
};

export default Person;
