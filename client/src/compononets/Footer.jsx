import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="section footer">
            <div className="contacts">
                <ul>
                    <li>
                        <Link to="#">FAQ</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="#">Ways to Watch</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="#">Terms of Use</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="#">Contact Us</Link>
                    </li>
                </ul>
            </div>
            <p>	&copy; Only with educational purpose</p>
        </footer>
    )
}