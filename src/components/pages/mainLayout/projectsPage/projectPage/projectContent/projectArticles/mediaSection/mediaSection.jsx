import { useCallback, useRef, useState } from "react";
import { getFullUrl } from "../../../../../../../../utils/fullPath";
import classes from "./mediaSection.module.scss";


const MediaSection = ({ media }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlayVideo = useCallback(() => {
        setIsPlaying(prevState => {
            const nextState = !prevState
            if (nextState) {
                videoRef.current.play()
            } else {
                videoRef.current.pause();
            }
            return nextState;
        });
    }, [])

    const videoData = media?.video.data;
    const imageData = media?.image.data;

    const videoAttribute = Array.isArray(videoData)
        ? videoData[0]?.attributes
        : videoData?.attributes;
    const imageAttribute = Array.isArray(imageData)
        ? imageData[0]?.attributes
        : imageData?.attributes;


    const videoUrl = getFullUrl(videoAttribute?.url);
    const imageUrl = getFullUrl(imageAttribute?.url);

    return (
        <section className={`${classes.section} ${!media.title ? classes.mediaSection : ""}`}>
            {imageUrl && (
                <img src={imageUrl} alt="" />
            )}
            {videoUrl && (
                <div className={`${classes.videoContainer} ${isPlaying ? classes.isPlaying : ""}`} onClick={handlePlayVideo}><video ref={videoRef}>
                    <source src={videoUrl} type={videoData.mime || `video/mp4`} />
                </video>
                </div>)}
        </section>
    )
}

export default MediaSection;