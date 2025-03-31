/* eslint-disable react/prop-types */
import { Link } from "react-router"

import RatingOverall from "./RatingOverall"
import useSearchByCriteria from "../../hooks/useSearchByCriteria"

export default function CatalogueItem({
    _id,
    title,
    coverImageUrl,
    characterImageUrl,
    author
}) {

    const baseUrl = 'http://localhost:3030/data/ratings';
    const [data] = useSearchByCriteria(baseUrl, "championId", _id)
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
                {!!author &&
                    <p className="created-by">Created by: {author.username}</p>
                }
                <RatingOverall key={_id} data={data} />
            </div>
        </>
    )
}