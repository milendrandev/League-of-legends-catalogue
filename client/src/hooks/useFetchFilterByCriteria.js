import { useState, useEffect } from "react";

const baseUrl = 'http://localhost:3030/data/champions';

const useFetchFilterByCriteria = (criteria, value) => {

    const [data, setData] = useState([]);

    useEffect(() => {

        const searchParams = new URLSearchParams({
            where: `${criteria}="${value}"`,
        });

        fetch(`${baseUrl}?${searchParams.toString()}`)
            .then(res => res.json())
            .then(result => {
                setData(Object.values(result));
            })
    }, [criteria, value]);

    return [data];
};
export default useFetchFilterByCriteria;