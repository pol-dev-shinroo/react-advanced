import React, { useState, useContext } from "react";
import { data } from "../../data/data";

const PersonContext = React.createContext();
// two components - Provider, Consumer

const ContextApi = () => {
    const [people, setPeople] = useState(data);
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        });
    };
    return (
        <PersonContext.Provider value={{ removePerson, people }}>
            <h3>prop drilling</h3>
            <List />
        </PersonContext.Provider>
    );
};

const List = () => {
    const mainData = useContext(PersonContext);
    return (
        <>
            {mainData.people.map((person) => {
                return <SinglePerson key={person.id} {...person} />;
            })}
        </>
    );
};

const SinglePerson = ({ id, firstName }) => {
    const { removePerson } = useContext(PersonContext);
    console.log(data);
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

export default ContextApi;
