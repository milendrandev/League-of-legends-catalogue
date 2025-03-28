import { useState } from "react";
import useFetchWithRelations from "../../hooks/useFetchWithRelations";
import CatalogueItem from "./CatalogueItem";
import Sorting from "./Sorting";

export default function AllChampionsCatalogue() {
    const baseUrl = 'http://localhost:3030/data/champions';
    const [sortedChampions, setSortedChampions] = useState();
    const [champions] = useFetchWithRelations(baseUrl);

    const handleChange = (event) => {
        const value = (event.target.value)

        if (value === 1) {
            const sorted = champions.toSorted((a, b) => a.title.localeCompare(b.title));
            setSortedChampions(sorted)
        }
        else if (value === 2) {
            const sorted = champions.toSorted((a, b) => b.title.localeCompare(a.title));
            setSortedChampions(sorted)
        }
        else if (value === 3) {
            const sorted = champions.toSorted((a, b) => b._createdOn - a._createdOn);
            setSortedChampions(sorted)
        }
        else if (value === 4) {
            const sorted = champions.toSorted((a, b) => a._createdOn - b._createdOn);
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