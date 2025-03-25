import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import championService from "../../services/championService";
import { UserContext } from "../../contexts/UserContext";
import { CollectionContext } from "../../contexts/collectionContext";

import '../../../public/styles/champion-details.css';
import BuyModal from "./BuyModal";
import DeleteModal from "./DeleteModal";
import RatingChampion from "./RatingChampion";
import useFetchFilterByTwo from "../../hooks/useSearchByTwoCriteries";

export default function DetailChampion({ }) {
    const { championId } = useParams();
    const [champion, setChampion] = useState({});
    const { accessToken, _id } = useContext(UserContext)
    const { data } = useFetchFilterByTwo("_ownerId", _id, "championId", championId)

    const isOwner = champion._ownerId === _id;

    useEffect(() => {
        championService.getChampionById(championId)
            .then(setChampion);
    }, [championId]);

    return (
        <>
            <section className="details">

                <main>
                    <h1>{champion.title}</h1>
                    <p className="story">{champion.story}</p>

                    {!isOwner && accessToken && <BuyModal />}

                    {isOwner && accessToken &&
                        <div>
                            <input type="submit" value="You own this Champion" desabled="true"></input>
                        </div>}

                    {isOwner && <DeleteModal />}

                    <RatingChampion key={championId} championId={championId} data={data} />
                </main>

                <aside>
                    <img src={champion.coverImageUrl} alt={champion.title} />
                </aside>
            </section >
        </>
    )
}