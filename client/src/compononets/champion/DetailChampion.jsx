import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router";
import championService from "../../services/championService";
import { UserContext } from "../../contexts/UserContext";

import '../../../public/styles/champion-details.css';
import DeleteModal from "./DeleteModal";
import RatingChampion from "./RatingChampion";
import useFetchFilterByTwo from "../../hooks/useSearchByTwoCriteries";

export default function DetailChampion() {
    const baseUrl = 'http://localhost:3030/data/ratings';
    const { championId } = useParams();
    const [champion, setChampion] = useState({});
    const { accessToken, _id } = useContext(UserContext)
    const { data } = useFetchFilterByTwo(baseUrl, "_ownerId", _id, "championId", championId)

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

                    {isOwner && accessToken &&
                        <Link to={`/${championId}/edit`} className="edit">Edit your Champion</Link>}
                    {isOwner && <DeleteModal championId={championId} accessToken={accessToken} />}

                    <RatingChampion key={championId} championId={championId} data={data} />
                </main>

                <aside>
                    <img src={champion.coverImageUrl} alt={champion.title} />
                </aside>
            </section >
        </>
    )
}