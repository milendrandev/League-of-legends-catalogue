import { useState, useEffect } from "react"

const useFetchWithRelations = (baseUrl) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            load: `author=_ownerId:users`,
        });

        fetch(`${baseUrl}?${searchParams.toString()}`)
            .then(res => res.json())
            .then(result => {
                setData(Object.values(result));
            });
    }, [baseUrl]);

    return [data]
}

export default useFetchWithRelations;