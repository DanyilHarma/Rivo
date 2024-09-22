import { useState } from "react";
import classes from "./video.module.scss"
import { useRef } from "react";

const Video = (props) => {
    const videoRef = useRef();

    const [videoState, setVideoState] = useState({
        isPlaying: false,
        progress: 0
    });

    const handlePlayPause = () => {
        if (videoState.isPlaying) {
            videoRef.current.pause(); setVideoState((prevState) => ({
                ...prevState,
                isPlaying: false
            }))
        } else {
            videoRef.current.play();
            setVideoState((prevState) => ({
                ...prevState,
                isPlaying: true
            }))
        };
    }

    const handleVideoEnd = () => {
        setVideoState((prevState) => ({
            ...prevState,
            isPlaying: false
        }))
    }

    const handleTimeUpdate = () => {
        const currentTime = videoRef.current.currentTime;
        const duration = videoRef.current.duration;
        const progressPercentage = (currentTime / duration) * 100;
        setVideoState((prevState) => ({
            ...prevState,
            progress: progressPercentage
        }))
    }

    const circleRadius = 140;
    const circleCircumference = 2 * Math.PI * circleRadius;
    const strokeDashoffset = circleCircumference - (videoState.progress / 100) * circleCircumference;

    const handleContainerClick = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const radius = rect.width / 2;
        const centerX = rect.x + radius;
        const centerY = rect.y + radius;
        const distance = Math.sqrt((event.clientX - centerX) ** 2 + (event.clientY - centerY) ** 2);

        if (distance <= radius) {
            handlePlayPause();
        }
    };


    return (
        <div className={`${classes.videoContainer} ${videoState.isPlaying ? classes.videoContainerPlaying : ""}`} onClick={handleContainerClick}>
            <svg className={classes.progressRing} width="350px" height="350px">
                <circle className={classes.progress}
                    cx="175"
                    cy="175"
                    r={circleRadius}
                    strokeWidth={1 + (videoState.progress / 100) * 16}
                    strokeDasharray={circleCircumference}
                    strokeDashoffset={strokeDashoffset}
                    transform="rotate(-90 175 175)" />
            </svg>
            <video width="350px" ref={videoRef} onTimeUpdate={handleTimeUpdate} onEnded={handleVideoEnd}>
                <source src={props.videoData} type="video/mp4" />
            </video>
        </div >
    )
}
export default Video;