import React, { useState, useReducer, useEffect } from "react";
import Modal from "./components/Modal";
import { data } from "../../data/data";
import { reducer } from "./Reducer/Reducer";

const defaultState = {
    people: data,
    isModalOpen: false,
    modalContent: "",
};

const UseReduer = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    const [person, setPerson] = useState({ firstName: "" });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setPerson({ ...person, [name]: value });
        console.log(person);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (person.firstName) {
            const newPerson = {
                ...person,
                id: new Date().getTime().toString(),
            };
            console.log(newPerson);
            dispatch({ type: "ADD_ITEM", payload: newPerson });
            setPerson({ firstName: "" });
        } else {
            dispatch({ type: "RANDOM" });
        }
    };
    const closeModal = () => {
        dispatch({ type: "CLOSE_MODAL" });
    };

    return (
        <>
            {state.isModalOpen && (
                <Modal
                    closeModal={closeModal}
                    modalContent={state.modalContent}
                />
            )}
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <input
                        type="text"
                        name="firstName"
                        value={person.firstName}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">add</button>
            </form>
            {state.people.map((person) => {
                const { id, firstName } = person;
                return (
                    <div key={id} className="item">
                        <h4>{firstName}</h4>
                        <button
                            onClick={() => {
                                dispatch({
                                    type: "REMOVE_ITEM",
                                    payload: id,
                                });
                            }}
                        >
                            remove
                        </button>
                    </div>
                );
            })}
        </>
    );
};

export default UseReduer;
