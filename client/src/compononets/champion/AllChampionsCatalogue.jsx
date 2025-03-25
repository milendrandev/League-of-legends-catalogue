import CatalogueItem from "./CatalogueItem";
import useFetch from "../../hooks/useFetch";

export default function AllChampionsCatalogue() {
    const baseUrl = 'http://localhost:3030/data/champions';
    const [champions] = useFetch(baseUrl);

    return (
        <>
            <div className='card-container'>

                {champions.map(champ =>
                    <CatalogueItem
                        key={champ._id}
                        {...champ}
                    />
                )}
            </div>
        </>
    )
}