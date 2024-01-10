import "../../styles/videoInfo.css"
import urlYoutube from "../../utils/api/videoInfoUrl";

const VideoInfo = () => {
    return (
        <div className="container-mediaVideo">
            <iframe
                className="frame-video"
                src={urlYoutube}
                title="YouTube video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        </div>
    )
}
export default VideoInfo;