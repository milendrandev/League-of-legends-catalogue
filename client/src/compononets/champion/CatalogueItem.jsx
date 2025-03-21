import { Link } from "react-router"

export default function CatalogueItem({
    _id,
    title,
    coverImageUrl,
    characterImageUrl
}) {
    return (
        <>
            <Link to={`/${_id}/details`} >
                <div className="card">
                    <div className="wrapper">
                        <img src={coverImageUrl} className="cover-image" />
                    </div>
                    <p className='title'>{title}</p>
                    <img src={characterImageUrl} className="character" />
                </div>
            </Link>
        </>
    )
}