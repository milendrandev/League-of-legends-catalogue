import { Link } from 'react-router';

export default function Header() {
    return (
        <header className="menu">
            <Link to="/">
                <img className="logo" src="./public/images/logo.png" alt="League Of Legends" />
            </Link>
            <nav>
                <ul className="list">
                    <li>
                        <Link to="/catalogue">Champions Catalogue</Link>
                    </li>
                    <li>
                        <Link to="/create-champion">Create your Champion</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/logout">Logout</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}