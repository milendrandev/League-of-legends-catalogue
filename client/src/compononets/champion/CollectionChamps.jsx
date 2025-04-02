import { useContext } from "react";
import CatalogueItem from "./CatalogueItem";
import useSearchByCriteria from "../../hooks/useSearchByCriteria";
import { UserContext } from "../../contexts/UserContext";
import CollectionBlank from "./CollectionBlank";

export default function CollectionChamps() {
    const baseUrl = 'http://localhost:3030/data/champions';

    const { _id } = useContext(UserContext)
    const criteria = "_ownerId";
    const [data] = useSearchByCriteria(baseUrl, criteria, _id);

    return (
        <>
            <div className='card-container'>
                {data.length !== 0 ?
                    data.map(champ =>
                        <CatalogueItem
                            key={champ._id}
                            {...champ}
                        />
                    )
                    :
                    <CollectionBlank />
                }
                </div>
        </>
    )
}