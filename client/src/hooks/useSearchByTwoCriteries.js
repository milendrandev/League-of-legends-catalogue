import { useState, useEffect } from "react";

const useFetchFilterByTwo = (baseUrl, criteria, value, secondCriteria, secondValue) => {

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
    }, [baseUrl, criteria, value, secondCriteria, secondValue]);

    return { data };
};
export default useFetchFilterByTwo;