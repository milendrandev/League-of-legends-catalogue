import { Link } from "react-router"

import RatingOverall from "./RatingOverall"
import useFetchFilterByCriteria from "../../hooks/useFetchFilterByCriteria"

export default function CatalogueItem({
    _id,
    title,
    coverImageUrl,
    characterImageUrl
}) {

    const [data] = useFetchFilterByCriteria("championId", _id)
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
                <RatingOverall key={_id} data={data} />
            </div>
        </>
    )
}