import { Link } from "react-router"
import RatingChampion from "./RatingChampion"

export default function CatalogueItem({
    _id,
    title,
    coverImageUrl,
    characterImageUrl
}) {
    return (
        <>
            <div className="card-wrapper">
                <Link to={`/${_id}/details`} >
                    <div className="card">
                        <div className="wrapper">
                            <img src={coverImageUrl} className="cover-image" />
                        </div>
                        <p className='title'>{title}</p>
                        <img src={characterImageUrl} className="character" />
                    </div>
                </Link>
                <p className="created-by">Created by: Admin</p>
                <RatingChampion/>
            </div>
        </>
    )
}