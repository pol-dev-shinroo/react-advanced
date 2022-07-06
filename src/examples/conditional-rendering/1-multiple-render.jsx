import React, { useState, useEffect } from "react";
import fetchData from "../../instance";

const Multiple = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState("default user");

    useEffect(() => {
        const apiHandler = async () => {
            const res = await fetchData.get("authors");
            console.log(res);
            const { name } = res.data[0];
            console.log(name);
            setUser(name);
            setIsLoading(false);
        };
        try {
            apiHandler();
        } catch (err) {
            console.log(err);
            setIsError(true);
        }
    }, []);

    console.log(user);

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }
    if (isError) {
        return (
            <div>
                <h1>Error...</h1>
            </div>
        );
    }
    return (
        <div>
            <h1>{user}</h1>
        </div>
    );
};

export default Multiple;
