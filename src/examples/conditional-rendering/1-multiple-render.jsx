import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const Multiple = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState("default user");

    useEffect(() => {
        fetch(url)
            .then((res) => {
                console.log(res);
                const data = res.json();
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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
