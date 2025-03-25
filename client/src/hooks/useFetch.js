import { useState, useEffect } from "react";

const useFetch = (baseUrl) => {
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