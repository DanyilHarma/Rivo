import Video from "../../video/video";
import classes from "./review.module.scss";

const Review = (props) => {

    return (
        <div className={classes.reviewWrapper}>
            <div className={classes.reviewInfo}>
                <span className={classes.companyName}>{props.review.companyName}</span>
                <span className={classes.customerName}>{props.review.customerName}</span>
                <p>{props.review.reviewText}</p>
                <div className={classes.reviewContent}>
                    <img src={props.review.icon} alt="" />
                    <div className={classes.review}>
                        <div className={classes.stars}>{props.review.stars.map((star, index) => (<img key={index} src={star} />))}</div>
                        <span>{props.review.reviewDate}</span>
                    </div>
                    <a href={props.review.profileLink} target="_blank"><img src="http://localhost:1338/uploads/Linked_In_icon_d6df9c20df.png?updatedAt=2024-09-23T14%3A38%3A05.522Z" alt="" /></a>
                </div>
            </div>
            <Video key={props.review.reviewVideo} videoData={props.review.reviewVideo} />
        </div>
    )
}

export default Review;