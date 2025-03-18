import { Link } from "react-router"

export default function CatalogueItem({
    title,
    coverImageUrl,
    characterImageUrl
}) {
    return (
        <>
            <Link to="/">
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