import React, { useState } from "react";
import { data } from "../../../data/data";
import { Link } from "react-router-dom";
const People = () => {
    const [people, setPeople] = useState(data);
    console.log(data);
    return (
        <div>
            <h1>People Page</h1>
            {people.map((person) => {
                const { id, firstName } = person;
                return (
                    <div key={id} className="item">
                        <h4>{firstName}</h4>
                    </div>
                );
            })}
        </div>
    );
};

export default People;
