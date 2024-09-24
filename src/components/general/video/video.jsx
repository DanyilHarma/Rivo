import useVideoPlayer from '../../../hooks/useVideoPlayer';
import ProgressRing from './progressRing/progressRing';
import classes from './video.module.scss';

const Video = ({ videoData }) => {
    const {
        videoRef,
        state: { isPlaying, isMuted, progress },
        handlePlay,
        handlePause,
        toggleMute,
        handleTimeUpdate,
        handleVideoEnd,
    } = useVideoPlayer(videoData);

    const handleVideoClick = () => {
        if (isMuted) {
            toggleMute();
        } else {
            if (isPlaying) {
                handlePause();
            } else {
                handlePlay();
            }
        }
    };

    return (
        <div
            className={`${classes.videoContainer} ${isPlaying ? classes.videoContainerPlaying : ''
                }`}
            onClick={handleVideoClick}
        >
            <ProgressRing progress={progress} />
            <video
                width="350px"
                ref={videoRef}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnd}
                onPlay={handlePlay}
                onPause={handlePause}
                muted
                autoPlay
                playsInline
            >
                <source src={videoData} type="video/mp4" />
            </video>
        </div>
    );
};

export default Video;
