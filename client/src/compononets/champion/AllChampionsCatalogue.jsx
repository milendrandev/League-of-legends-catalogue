import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import CatalogueItem from "./CatalogueItem";
import Sorting from "./Sorting";

export default function AllChampionsCatalogue() {
    const baseUrl = 'http://localhost:3030/data/champions';
    const [champions] = useFetch(baseUrl);
    const [sortedChampions, setSortedChampions] = useState();

    const handleChange = (event) => {
        const value = (event.target.value)

        if (value === 10) {
            const sorted = champions.toSorted((a, b) => a.title.localeCompare(b.title));
            setSortedChampions(sorted)
        }
        else if (value === 20) {
            const sorted = champions.toSorted((a, b) => b.title.localeCompare(a.title));
            setSortedChampions(sorted)
        }
    };

    return (
        <>
            <Sorting handleChange={handleChange} />
            <div className='card-container'>

                {sortedChampions === undefined && champions.map(champ =>
                    <CatalogueItem
                        key={champ._id}
                        {...champ}
                    />
                )}
                {sortedChampions !== undefined && sortedChampions.map(champ =>
                    <CatalogueItem
                        key={champ._id}
                        {...champ}
                    />

                )}
            </div>
        </>
    )
}