import React, { useState, useEffect } from "react";
import fetchData from "../../instance";

const ControlledInputs = () => {
    const getApi = async () => {
        const res = await fetchData.post("form", { asdf: "asfd" });
        console.log(res);
    };

    useEffect(() => {
        getApi();
    }, []);
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`firstName: ${firstName}, email: ${email}`);
    };

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

                {/* <button type="submit" onClick={handleSubmit}>
                    add person
                </button> */}
            </form>
        </article>
    );
};

export default ControlledInputs;
