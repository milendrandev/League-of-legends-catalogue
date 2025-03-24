import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const baseUrl = 'http://localhost:3030/data/collections';

const useFetchFilterByCriteria = () => {
    const { _id } = useContext(UserContext)
    const [data, setData] = useState([]);

    useEffect(() => {

        const searchParams = new URLSearchParams({
            where: `collectorId="${_id}"`,
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