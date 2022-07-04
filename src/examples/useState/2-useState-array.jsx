import React from "react";
import { data } from "../data/data";

const useStateArray = () => {
    const [people, setPeople] = React.useState(data);
    console.log(people);

    const removeItem = (id) => {
        setPeople((oldPeople) => {
            let newPeople = oldPeople.filter((person) => person.id !== id);
            return newPeople;
        });
    };

    return (
        <>
            {people.map((persons) => {
                const { id, name } = persons;
                return (
                    <div key={id}>
                        <h4>{name}</h4>
                        {/* remove individually using filter */}
                        <button
                            type="button"
                            onClick={() => {
                                removeItem(id);
                            }}
                        >
                            remove individual item
                        </button>
                    </div>
                );
            })}
            {/* clears all array items */}
            <button
                type="button"
                onClick={() => {
                    setPeople([]);
                }}
            >
                Clear all Items
            </button>
        </>
    );
};

export default useStateArray;
