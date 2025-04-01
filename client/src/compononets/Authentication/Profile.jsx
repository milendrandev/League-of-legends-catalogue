import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import useSearchByCriteria from "../../hooks/useSearchByCriteria";

export default function Profile() {

    const championUrl = 'http://localhost:3030/data/champions';
    const ratingUrl = 'http://localhost:3030/data/ratings';

    const { _id, email, username, avatarUrl } = useContext(UserContext);

    const [champions] = useSearchByCriteria(championUrl, "_ownerId", _id)
    const [ratings] = useSearchByCriteria(ratingUrl, "_ownerId", _id)
    console.log(avatarUrl)

    return (
        <>
            <div className="profile">
                <div className="profile-container">
                    <section className="profileSection">
                        <main className="profileMain">
                            <div className="inputBox">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" required defaultValue={username} readOnly />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" required defaultValue={email} readOnly />
                            </div>
                            <div>
                                <p>Your Champions : {champions.length}</p>
                                {ratings[0] === 404 ?
                                    <p>Your Votes : 0</p>
                                    :
                                    <p>Your Votes : {ratings.length}</p>
                                }
                            </div>
                        </main>
                        <aside className="profileAside">
                            {!avatarUrl ?
                                <p><img src="https://img.freepik.com/premium-vector/avatar-profile-picture-icon-blue-background-flat-design-style-resources-graphic-element-design_991720-653.jpg" alt="Profil Picture" />
                                </p> :
                                <p><img src={avatarUrl} alt="Profil Picture" />
                                </p>
                            }
                        </aside>
                    </section>
                </div>
            </div >
        </>
    )
}