import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import championService from "../../services/championService";
import { UserContext } from "../../contexts/UserContext";
import PreviewModal from "./PreviewModal";

export default function EditChampion() {
    const navigate = useNavigate();
    const [champion, setChampion] = useState({});
    const { championId } = useParams();
    const { accessToken } = useContext(UserContext)
    const [characterImage, setCharacterImage] = useState({});
    const [coverImage, setCoverImage] = useState({});
    const [characterChanged, setCharacterChanged] = useState(false);
    const [coverChanged, setCoverChanged] = useState(false);

    useEffect(() => {
        championService.getChampionById(championId)
            .then(setChampion);
    }, [championId]);

    const onUpdateAction = async (formData) => {
        const data = Object.fromEntries(formData);
        await championService.update(data, championId, accessToken)
            .then(alert("Your Champion's characteristics changed!"));;

        navigate(`/collection`);
    }

    const onCoverChange = (event) => {
        setCoverChanged(true);
        setCoverImage(event.target.value)
    };

    const onCharacterChange = (event) => {
        setCharacterChanged(true);
        setCharacterImage(event.target.value)
    };

    return (
        <>
            <form className="formGen" action={onUpdateAction}>

                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>

                <div className="signin">
                    <div className="content">
                        <h2>Champion</h2>
                        <div className="form">
                            <div className="inputBox">
                                <input type="text" name="title" required defaultValue={champion.title} /> <i>Champion Name</i>
                            </div>
                            <div className="inputBox">
                                <input type="url" name="coverImageUrl" required defaultValue={champion.coverImageUrl} onChange={onCoverChange} />
                                <i>Cover Image</i>
                                {coverChanged
                                    ?
                                    <div className="preview">
                                        <PreviewModal coverImage={coverImage} />
                                    </div>
                                    :
                                    <div className="preview">
                                        <PreviewModal coverImage={champion.coverImageUrl} />
                                    </div>}
                            </div>
                            <div className="inputBox">
                                <input type="url" name="characterImageUrl" required defaultValue={champion.characterImageUrl} onChange={onCharacterChange} />
                                <i>Character Image</i>
                                {characterChanged
                                    ?
                                    <div className="preview">
                                        <PreviewModal characterImage={characterImage} />
                                    </div>
                                    :
                                    <div className="preview">
                                        <PreviewModal characterImage={champion.characterImageUrl} />
                                    </div>}
                            </div>
                            <div className="inputBox">
                                <textarea name="story" required defaultValue={champion.story} /> <i>Lore Story</i>
                            </div>
                            <div className="links"> <a href="#"></a> <Link to="/catalogue">Catalogue</Link>
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="Save" />
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </>
    )
}