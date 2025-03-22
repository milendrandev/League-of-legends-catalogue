import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router";
import championService from "../../services/championService";
import { UserContext } from "../../contexts/UserContext";
import { CollectionContext } from "../../contexts/collectionContext";

import '../../../public/styles/champion-details.css';

export default function DetailChampion({ }) {
    const navigate = useNavigate();
    const { championId } = useParams();
    const [champion, setChampion] = useState({});
    const [added, setAdded] = useState(false);
    const { accessToken, _id } = useContext(UserContext)
    const { addToCollectionHandler, champs, removeCollectionHandler } = useContext(CollectionContext)

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

    const onDeleteClick = async () => {
        await championService.delete(championId, accessToken);
        navigate('/catalogue')
        //setChampions(state => state.filter(champ => champ._id !== champId));
    }

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
            console.log('succses')
        }
    }

    return (
        <>
            <section className="details">

                <main>
                    <h1>{champion.title}</h1>
                    <p className="story">{champion.story}</p>
                    {!added && accessToken && <div>
                        <input type="submit" value="Add to your Collection" onClick={onCollectClick}></input>
                    </div>}
                    {added && accessToken &&
                        <div>
                            <input type="submit" value="Remove from your Collection" onClick={onCollectClick}></input>
                        </div>}

                    {isOwner && <div>
                        <input type="submit" value="Delete" onClick={onDeleteClick}></input>
                    </div>}
                </main>

                <aside>
                    <img src={champion.coverImageUrl} alt={champion.title} />
                </aside>
            </section >
        </>
    )
}