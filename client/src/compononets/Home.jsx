export default function Home() {
    return (
        <>
            <div className="videoWrapper">
                <video autoPlay controls muted id="myVideo">
                    <source src="/images/myVideo.mp4" type="video/mp4" />
                </video>
            </div>
        </>
    )
}