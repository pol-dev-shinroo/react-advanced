import React, { useEffect, useState } from "react";
import fetchData from "../../instance";

const InstancePrac = () => {
    const getAuthors = async () => {
        const res = await fetchData.get("authors");
        console.log(res.data);
    };
    const getBooks = async () => {
        const res = await fetchData.get("books");
        console.log(res.data);
    };

    useEffect(() => {
        getAuthors();
        getBooks();
    }, []);
    return <></>;
};

export default InstancePrac;
