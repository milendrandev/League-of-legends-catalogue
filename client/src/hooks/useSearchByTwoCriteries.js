import { useState, useEffect } from "react";

const baseUrl = 'http://localhost:3030/data/ratings';

const useFetchFilterByTwo = (criteria, value, secondCriteria, secondValue) => {

    const [data, setData] = useState({});

    useEffect(() => {

        const searchParams = new URLSearchParams({
            where: `${criteria}="${value}" AND ${secondCriteria}="${secondValue}"`,


        });

        fetch(`${baseUrl}?${searchParams.toString()}`)
            .then(res => res.json())
            .then(result => {
                setData(result);
            })
    }, []);

    return { data };
};
export default useFetchFilterByTwo;