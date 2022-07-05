import React, { useEffect, useState } from "react";
import axios from "axios";

import fetchData from "./instance";

export default function Test() {
    // axios
    const axiosGet = () => {
        fetchData.get("authors").then((res) => {
            console.log(res.data);
        });
        // axios({
        //     method: "get",
        //     url: "https://31d1e339-7ebd-48b7-bff1-305a5418581f.mock.pstmn.io/authors",
        //     responseType: "stream",
        // }).then((res) => {
        //     console.log(res);
        // });
    };

    useEffect(() => {
        axiosGet();
    }, []);

    return <></>;
}
