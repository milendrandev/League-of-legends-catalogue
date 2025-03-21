import { useContext } from "react";
import CatalogueItem from "./CatalogueItem";
import { CollectionContext } from "../../contexts/collectionContext";

export default function CollectionChamps() {
    const {champs} = useContext(CollectionContext)
    console.log(champs)
    return (
        <>
            <div className='container'>

                {champs.map(champ =>
                    <CatalogueItem
                        key={champ._id}
                        {...champ}
                    />
                )}

            </div>
        </>
    )
}