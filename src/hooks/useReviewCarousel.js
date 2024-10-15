import { useCallback, useEffect, useRef, useState } from "react";


const useReviewCarousel = (projectsItem) => {
    const [state, setState] = useState({
        currentReviewIndex: 0,
        progressArray: []
    });
    const intervalRef = useRef(null);

    useEffect(() => {
        setState((prevState) => ({
            ...prevState,
            progressArray: new Array(projectsItem.length).fill(0)
        }));
    }, [projectsItem.length])


    const switchReview = useCallback(() => {
        setState((prevState) => {
            const newProgress = [...prevState.progressArray];
            newProgress[prevState.currentReviewIndex] = 100;

            const resetProgress = new Array(projectsItem.length).fill(0);

            return {
                ...prevState,
                progressArray: prevState.currentReviewIndex === projectsItem.length - 1 ? resetProgress : newProgress,
                currentReviewIndex: prevState.currentReviewIndex === projectsItem.length - 1 ? 0 : prevState.currentReviewIndex + 1
            }
        });
    }, [projectsItem.length])


    const restartTimer = useCallback(() => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(switchReview, 10000);
    }, [switchReview])
    useEffect(() => {
        restartTimer();
        return () => clearInterval(intervalRef.current)
    }, [restartTimer])


    const handleNextReview = useCallback(() => {
        clearInterval(intervalRef.current)
        switchReview();
        restartTimer();
    }, [switchReview, restartTimer])

    const handlePrevReview = useCallback(() => {
        clearInterval(intervalRef.current)
        setState((prevState) => {
            const newProgress = [...prevState.progressArray];
            newProgress[prevState.currentReviewIndex] = 100;

            const resetProgress = new Array(projectsItem.length).fill(0);

            return {
                ...prevState,
                progressArray: prevState.currentReviewIndex === 0 ? resetProgress : newProgress,
                currentReviewIndex: prevState.currentReviewIndex === 0 ? projectsItem.length - 1 : prevState.currentReviewIndex - 1
            }
        })
        restartTimer();
    }, [projectsItem.length, restartTimer])


    useEffect(() => {
        let startTime = Date.now();
        let animationFrameId;

        const updateProgress = () => {
            const elapsed = Date.now() - startTime;
            const percentage = Math.min((elapsed / 10000) * 100, 100);

            setState((prevProgress) => {
                const newProgress = [...prevProgress.progressArray];
                newProgress[prevProgress.currentReviewIndex] = percentage;
                return {
                    ...prevProgress,
                    progressArray: newProgress,
                }
            })

            if (percentage < 100) {
                animationFrameId = requestAnimationFrame(updateProgress);
            }
        };
        updateProgress();

        return () => {
            cancelAnimationFrame(animationFrameId);
        }

    }, [state.currentReviewIndex])

    return {
        state,
        handleNextReview,
        handlePrevReview
    }
}

export default useReviewCarousel;