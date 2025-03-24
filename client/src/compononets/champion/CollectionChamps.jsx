import { useContext } from "react";
import CatalogueItem from "./CatalogueItem";
import { CollectionContext } from "../../contexts/collectionContext";
import useFetchFilterByCriteria from "../../hooks/useFetchFilterByCriteria";
import { UserContext } from "../../contexts/UserContext";

export default function CollectionChamps() {
    const { _id } = useContext(UserContext)
    const criteria = "_ownerId";
    const [data] = useFetchFilterByCriteria(criteria, _id);
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