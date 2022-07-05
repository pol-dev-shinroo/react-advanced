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

    const getAll = async () => {
        try {
            const authors = await fetchData.get("authors");
            console.log(authors.data);
            const books = await fetchData.get("books");
            console.log(books.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        // getAuthors();
        // getBooks();
        getAll();
    }, []);
    return <></>;
};

export default InstancePrac;
