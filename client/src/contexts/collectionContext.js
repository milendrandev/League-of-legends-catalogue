import { createContext } from "react";


export const CollectionContext = createContext({
    champs: [],
    addToCollectionHandler: () => null,
    removeCollectionHandler: () => null,
});