import CatalogueItem from "./CatalogueItem";
import useFetch from "../../hooks/useFetch";

export default function AllChampionsCatalogue() {

    const [champions] = useFetch();

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