import { useState, useEffect } from "react";
import { useParams } from "react-router";
import championService from "../../services/championService";

export default function DetailChampion() {
    const { championId } = useParams();
    const [champion, setChampion] = useState({});

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
                </main>
                <aside>
                    <img src={champion.coverImageUrl} alt={champion.title} />
                </aside>
            </section>
        </>
    )
}