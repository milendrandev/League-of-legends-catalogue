import { Link } from "react-router";

export default function CollectionBlank() {
    return (
        <div className="card-container-blank">
            <Link to="/create-champion" >
                <div className="card-blank">
                    <div className="wrapper-blank">
                        <p>
                            <img src="../public/images/plus.png" className="cover-image-plus" />
                        </p>
                    </div>
                    <p className="title-blank">Create your first Champion</p>
                </div>
            </Link>
            {/* <p className="created-by">Create your first Champion</p> */}
        </div>
    )
}