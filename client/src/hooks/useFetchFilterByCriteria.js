import { useState, useEffect } from "react";



const useFetchFilterByCriteria = (baseUrl, criteria, value) => {

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
    }, []);

    return [data];
};
export default useFetchFilterByCriteria;