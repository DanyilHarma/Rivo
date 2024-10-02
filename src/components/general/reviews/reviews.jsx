import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useGetProjectsDataQuery } from "../../../redux/apiSlice";
import TitleComponent from "../../general/titleComponent/titleComponent";
import Review from "./review/review";
import classes from "./reviews.module.scss";
import ProgressCircles from "./progressCircles/progressCircles";

const Reviews = (props) => {
    const [state, setState] = useState({
        currentReviewIndex: 0,
        progressArray: []
    });
    const intervalRef = useRef(null);
    const { data: projectsData, error, isLoading } = useGetProjectsDataQuery();

    const projectsItem = useMemo(() => {
        return (
            projectsData?.data?.attributes?.rivo_projects?.data[0]?.attributes?.projectsData || []
        )
    }, [projectsData])

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



    const currentReview = projectsItem[state.currentReviewIndex];
    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка при загрузке данных!</p>;

    return (
        <div className={classes.reviewsContainer}>
            <TitleComponent titleData={props.reviewsData.bigTitles} />
            {currentReview && (<Review review={currentReview.reviewInfo} />)}
            <div className={classes.indicatorsContainer}>
                <ProgressCircles progressArray={state.progressArray} currentIndex={state.currentReviewIndex} />
                <div className={classes.buttons}>
                    <button onClick={handlePrevReview}></button>
                    <button onClick={handleNextReview}></button>
                </div>
            </div>
            {props.reviewsData.imagesBackground.map((image, index) =>
                (<img key={index} src={image.imgSrc} style={{ top: image.top, left: image.left, right: image.right, width: image.width, maxWidth: image.maxWidth }} />)
            )}
        </div>
    )
}

export default Reviews;