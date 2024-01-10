import "../../styles/videoInfo.css"
import urlYoutube from "../../utils/api/videoInfoUrl";

const VideoInfo = () => {
    return (
        <div className="container-mediaVideo">
            <iframe
                className="frame-video"
                src={urlYoutube}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    )
}
export default VideoInfo;