import React from "react";

const ErrorExample = () => {
    let title = "random title";
    const handleClick = () => {
        title = "change";
        console.log(title);
    };
    console.log(title);
    return (
        <React.Fragment>
            <h2>{title}</h2>
            <button type="button" onClick={handleClick}>
                change Title
            </button>
        </React.Fragment>
    );
};

export default ErrorExample;
