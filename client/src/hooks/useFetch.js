import { useState, useEffect } from "react";

const baseUrl = 'http://localhost:3030/data/champions';

const useFetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        fetch(baseUrl)
            .then(res => res.json())
            .then(result => {
                setData(Object.values(result));
            })
    }, [baseUrl]);

    return [data];
};

export default useFetch;