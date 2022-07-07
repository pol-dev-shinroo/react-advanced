import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
const url = "https://course-api.com/javascript-store-products";

const Example = () => {
    const { loading, products } = useFetch(url);
    console.log(loading, products);
    return (
        <div>
            <h2>{loading ? "loading..." : "data"}</h2>
        </div>
    );
};

export default Example;
