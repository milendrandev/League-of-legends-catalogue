import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="section footer">
            <div className="contacts">
                <ul>
                    <li>
                        <Link to="/faq">FAQ</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="https://www.leagueoflegends.com/en-gb/" target="_blank">Play LOL</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="terms-of-use">Terms of Use</Link>
                    </li>
                </ul>
            </div>
            <p>	&copy; Only with educational purpose</p>
        </footer>
    )
}