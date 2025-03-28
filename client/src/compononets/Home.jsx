export default function Home() {
    return (
        <>
            <div className="video">
                <video autoPlay loop muted id="myVideo">
                    <source src="/images/myVideo.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="content">
                <section>
                    <h1>Welcome</h1>
                    <h1>To</h1>
                    <p><img id="homeLogo" src="/images/logo.png" alt="League Of Legends" /></p>
                </section>
                <footer className="section footer">
            <div className="contacts">
                <ul>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                    <li>
                        <a href="#">Account</a>
                    </li>
                    <li>
                        <a href="#">Investor Relations</a>
                    </li>
                    <li>
                        <a href="#">Jobs</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">Ways to Watch</a>
                    </li>
                    <li>
                        <a href="#">Help Center</a>
                    </li>
                    <li>
                        <a href="#">Netflix Originals</a>
                    </li>
                    <li>
                        <a href="#">Speed Test</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">Legal Notices</a>
                    </li>
                    <li>
                        <a href="#">Corporate Information</a>
                    </li>
                    <li>
                        <a href="#">Cookies</a>
                    </li>
                    <li>
                        <a href="#">Preferences</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">Privacy</a>
                    </li>
                    <li>
                        <a href="#">Terms of Use</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        </footer>
            </div>
        </>
    )
}