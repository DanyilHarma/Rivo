import { useState, useRef, useEffect } from 'react';

const useVideoPlayer = (videoSrc) => {
    const videoRef = useRef(null);
    const observerRef = useRef(null);

    const [state, setState] = useState({
        isPlaying: false,
        isMuted: true,
        progress: 0,
    });

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        videoElement.currentTime = 0;
        videoElement.muted = true;
        setState({
            isPlaying: true,
            isMuted: true,
            progress: 0,
        });

        videoElement.play().catch((error) => {
            if (error.name !== 'AbortError') {
                console.error('Error playing video:', error);
            }
        });

        observerRef.current = new IntersectionObserver(
            ([entry]) => {
                if (!videoElement) return;

                if (entry.isIntersecting) {
                    if (!videoElement.paused) return; // Уже воспроизводится
                    videoElement.play().catch((error) => {
                        if (error.name !== 'AbortError') {
                            console.error('Error playing video:', error);
                        }
                    });
                    setState((prevState) => ({
                        ...prevState,
                        isPlaying: true,
                    }));
                } else {
                    if (videoElement.paused) return; // Уже на паузе
                    videoElement.pause();
                    setState((prevState) => ({
                        ...prevState,
                        isPlaying: false,
                    }));
                }
            },
            { threshold: 0.5 }
        );
        observerRef.current.observe(videoElement);

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [videoSrc]);

    const handlePlay = () => {
        const videoElement = videoRef.current;
        if (!videoElement || !videoElement.paused) return;

        videoElement.play().catch((error) => {
            if (error.name !== 'AbortError') {
                console.error('Error playing video:', error);
            }
        });

        setState((prevState) => ({
            ...prevState,
            isPlaying: true,
        }));
    };

    const handlePause = () => {
        const videoElement = videoRef.current;
        if (!videoElement || videoElement.paused) return;

        videoElement.pause();

        setState((prevState) => ({
            ...prevState,
            isPlaying: false,
        }));
    };

    const toggleMute = () => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        videoElement.muted = !videoElement.muted;
        setState((prevState) => ({
            ...prevState,
            isMuted: videoElement.muted,
        }));
    };

    const handleTimeUpdate = () => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const currentTime = videoElement.currentTime;
        const duration = videoElement.duration || 1;
        const progressPercentage = (currentTime / duration) * 100;
        setState((prevState) => ({
            ...prevState,
            progress: progressPercentage,
        }));
    };

    const handleVideoEnd = () => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        videoElement.currentTime = 0;
        videoElement.muted = true;
        setState({
            isPlaying: false,
            isMuted: true,
            progress: 0,
        });
    };

    return {
        videoRef,
        state,
        handlePlay,
        handlePause,
        toggleMute,
        handleTimeUpdate,
        handleVideoEnd,
    };
};

export default useVideoPlayer;
