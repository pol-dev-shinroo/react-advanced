import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: ${(props) => props.width * 32}px;
    border: 2px solid red;
    img {
        width: 100px;
    }
`;

const url = "https://api.github.com/users";

const FetchData = () => {
    const [list, setList] = useState([]);
    const getData = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setList(users);
    };
    useEffect(() => {
        getData();
    }, []);
    console.log(list);

    return (
        <>
            {list.map((item, idx) => {
                console.log(item);
                return (
                    <Container key={item.id} width={item.login.length}>
                        <h1>{item.login}</h1>
                        <img src={item.avatar_url} alt="" />
                    </Container>
                );
            })}
        </>
    );
};

export default FetchData;
