import { Link } from "react-router";

export default function AllChampionsCatalogue() {
    return (
        <div className='container'>

            <Link to="/">
                <div className="card">
                    <div className="wrapper">
                        <img src="https://i.imgur.com/4TbSuck.jpeg" className="cover-image" />
                    </div>
                    <p className='title'>Ahri</p>
                    <img src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/ahri/skins/base/images/ahri_splash_tile_0.jpg" className="character" />
                </div>
            </Link>
            <Link to="/">
                <div className="card">
                    <div className="wrapper">
                        <img src="https://i.imgur.com/mM60cNg.jpeg" className="cover-image" />
                    </div>
                    <p className='title'>Aatrox</p>
                    <img src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/aatrox/skins/base/images/aatrox_splash_tile_0.jpg" className="character" />
                </div>
            </Link>

        </div>
    )
}