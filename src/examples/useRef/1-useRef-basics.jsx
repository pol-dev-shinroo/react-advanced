import React, { useEffect, useRef } from "react";

const UseRefBasics = () => {
    const refContainer = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
    };

    useEffect(() => {
        // for user experience, the input tag will be focused the moment component renders
        refContainer.current.focus();
    });
    return (
        <>
            {console.log("render")}
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={refContainer} />
                    <button type="submit">submit</button>
                </div>
            </form>
        </>
    );
};

export default UseRefBasics;
