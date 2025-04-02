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
    console.log(data)

    return (
        <>
            {data.length !== 0 ?
                data.map(champ =>
                    <div className='card-container'>
                        <CatalogueItem
                            key={champ._id}
                            {...champ}
                        />
                    </div>
                ) :
                <CollectionBlank />
            }
        </>
    )
}