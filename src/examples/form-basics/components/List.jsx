import React from "react";

const List = ({ people }) => {
    return (
        <div>
            {people.map((item) => {
                const { firstName, email, age, id } = item;
                return (
                    <div key={id} className="item">
                        <h4>{firstName}</h4>
                        <p>{age}</p>
                        <p>{email}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default List;
