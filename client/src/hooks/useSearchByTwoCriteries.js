import { useState, useEffect } from "react";

const baseUrl = 'http://localhost:3030/data/ratings';

const useFetchFilterByTwo = (criteria, value, secondCriteria, secondValue) => {

    const [data, setData] = useState({});

    useEffect(() => {

        const searchParams = new URLSearchParams({
            where: `${criteria}="${value}" AND ${secondCriteria}="${secondValue}"`,


        });

        fetch(`${baseUrl}?${searchParams.toString()}`)
            .then(async res => await res.json())
            .then(async result => {
                await setData(result);
            })
    }, []);

    return { data };
};
export default useFetchFilterByTwo;