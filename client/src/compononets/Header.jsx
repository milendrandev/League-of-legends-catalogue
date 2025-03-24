import { useContext } from 'react';
import { NavLink } from 'react-router';
import { UserContext } from '../contexts/UserContext';

export default function Header() {

    const { email } = useContext(UserContext)

    return (
        <header className="menu">
            <NavLink to="/">
                <img className="logo" src="/images/logo.png" alt="League Of Legends" />
            </NavLink>
            <nav>
                <ul className="list">
                    <li>
                        <NavLink to="/catalogue">Champions Catalogue</NavLink>
                    </li>
                    {email
                        ? (
                            <>
                                <li>
                                    <NavLink to="/create-champion">Create your Champion</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/collection">My Collection</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/logout">Logout</NavLink>
                                </li>
                                <li>
                                    <NavLink id="profile" to="/profile">{email}</NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/register">Register</NavLink>
                                </li>
                            </>
                        )
                    }
                </ul>
            </nav>
        </header>
    )
}