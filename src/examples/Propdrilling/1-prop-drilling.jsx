import React, { useState } from "react";
import { data } from "../../data/data";

const Propdrilling = () => {
    const [people, setPeople] = useState(data);
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        });
    };
    return (
        <section>
            <h3>prop drilling</h3>
            <List people={people} removePerson={removePerson} />
        </section>
    );
};

// Here is the problem:
// List component itself does not need to access removePerson function.
// But still, we need to pass the function as prop to List component because the Single person component requires it. = prop drilling (unecessary)
const List = ({ people, removePerson }) => {
    return (
        <>
            {people.map((person) => {
                return (
                    <SinglePerson
                        key={person.id}
                        {...person}
                        removePerson={removePerson}
                    />
                );
            })}
        </>
    );
};

const SinglePerson = ({ id, firstName, removePerson }) => {
    return (
        <div>
            <h1>{firstName}</h1>
            <button
                onClick={() => {
                    removePerson(id);
                }}
            >
                remove item
            </button>
        </div>
    );
};

export default Propdrilling;
