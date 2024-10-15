import { useGetProjectsDataQuery } from "../../../redux/requests/apiSlice";
import TitleComponent from "../../general/titleComponent/titleComponent";
import Review from "./review/review";
import classes from "./reviews.module.scss";
import ProgressCircles from "./progressCircles/progressCircles";
import useReviewCarousel from "../../../hooks/useReviewCarousel";

const Reviews = (props) => {

    const { data: projectsData, error, isLoading } = useGetProjectsDataQuery();

    const projectsItem = projectsData?.data?.attributes?.rivo_projects?.data[0]?.attributes?.projectsData || [];

    const { state, handleNextReview, handlePrevReview } = useReviewCarousel(projectsItem);

    const currentReview = projectsItem[state.currentReviewIndex]

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