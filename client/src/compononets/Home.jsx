import Footer from "./Footer";

export default function Home() {
    return (
        <>
            <div className="video">
                <video autoPlay loop muted id="myVideo">
                    <source src="/images/myVideo.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="content">
                <section className="homeSection">
                    <h1>Welcome</h1>
                    <h1>To</h1>
                    <p><img id="homeLogo" src="/images/logo.png" alt="League Of Legends" /></p>
                </section>
            </div>
            <Footer />
        </>
    )
}