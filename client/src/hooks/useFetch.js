import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(result => {
                setData(Object.values(result));
            })
    }, [url]);

    return [data];
};

export default useFetch;