import { useContext } from "react";
import CatalogueItem from "./CatalogueItem";
import useSearchByCriteria from "../../hooks/useSearchByCriteria";
import { UserContext } from "../../contexts/UserContext";

export default function CollectionChamps() {
    const baseUrl = 'http://localhost:3030/data/champions';
    const { _id } = useContext(UserContext)
    const criteria = "_ownerId";
    const [data] = useSearchByCriteria(baseUrl, criteria, _id);
    console.log(data)
    return (
        <>
            <div className='card-container'>

                {data.map(champ =>
                    <CatalogueItem
                        key={champ._id}
                        {...champ}
                    />
                )}

            </div>
        </>
    )
}