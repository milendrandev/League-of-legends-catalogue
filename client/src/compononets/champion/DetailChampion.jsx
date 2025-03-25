import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router";
import championService from "../../services/championService";
import { UserContext } from "../../contexts/UserContext";
import { CollectionContext } from "../../contexts/collectionContext";

import '../../../public/styles/champion-details.css';
import BuyModal from "./BuyModal";
import DeleteModal from "./DeleteModal";
import RatingChampion from "./RatingChampion";
import useFetchFilterByTwo from "../../hooks/useSearchByTwoCriteries";

export default function DetailChampion({ }) {
    const navigate = useNavigate();
    const { championId } = useParams();
    const [champion, setChampion] = useState({});
    const [added, setAdded] = useState(false);
    const { accessToken, _id } = useContext(UserContext)
    const { addToCollectionHandler, champs, removeCollectionHandler } = useContext(CollectionContext)
    const { data } = useFetchFilterByTwo("_ownerId", _id, "championId", championId)

    const isOwner = champion._ownerId === _id;

    useEffect(() => {
        championService.getChampionById(championId)
            .then(setChampion);

        const champ = champs.find(champ => champ._id == championId);
        if (champ != undefined) {
            setAdded(true);
        }
        else {
            setAdded(false)
        }
    }, [championId]);

    const onCollectClick = () => {
        if (!accessToken) {
            navigate('/login')
        }


        if (added) {
            setAdded(false);
            removeCollectionHandler(championId);
            console.log('removed')
        }
        else {
            setAdded(true)
            addToCollectionHandler(champion);
            console.log('succsess')
        }
    }

    return (
        <>
            <section className="details">

                <main>
                    <h1>{champion.title}</h1>
                    <p className="story">{champion.story}</p>
                    <RatingChampion key={championId} championId={championId} data={data} />

                    {!isOwner && accessToken && <BuyModal />}
                    {isOwner && accessToken &&
                        <div>
                            <input type="submit" value="YOU OWN THIS CHAMPION" desabled="true"></input>
                        </div>}

                    {isOwner && <DeleteModal />}
                </main>

                <aside>
                    <img src={champion.coverImageUrl} alt={champion.title} />
                </aside>
            </section >
        </>
    )
}