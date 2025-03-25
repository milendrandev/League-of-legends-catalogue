import { useState } from "react";
import { CollectionContext } from "../../contexts/collectionContext";

export default function MyCollectionProvider({ children }) {

    const [champs, setChamps] = useState([]);

    const addToCollectionHandler = (champ) => {
        setChamps(state => [...state, champ]);
    };

    const removeCollectionHandler = (champId) => {
        setChamps(state => state.filter(champ => champ._id !== champId));
    };
    return (
        <CollectionContext.Provider value={{ champs, addToCollectionHandler, removeCollectionHandler }}>
            {children}
        </CollectionContext.Provider>
    )
}