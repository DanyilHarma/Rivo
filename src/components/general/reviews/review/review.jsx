import Video from "../../video/video";
import classes from "./review.module.scss";

const Review = ({ review }) => {

    return (
        <div className={classes.reviewWrapper}>
            <div className={classes.reviewInfo}>
                <span className={classes.companyName}>{review.companyName}</span>
                <span className={classes.customerName}>{review.reviewerName}</span>
                <p>{review.reviewText}</p>
                <div className={classes.reviewContent}>
                    <img src={review.icon} alt="" />
                    <div className={classes.review}>
                        <div className={classes.stars}>{review.stars.map((star, index) => (<img key={index} src={star} />))}</div>
                        <span>{review.reviewDate}</span>
                    </div>
                    <a href={review.profileLink} target="_blank"><img src="http://localhost:1338/uploads/Linked_In_icon_d6df9c20df.png?updatedAt=2024-09-23T14%3A38%3A05.522Z" alt="" /></a>
                </div>
            </div>
            {review.reviewVideo ? <Video key={review.reviewVideo} videoData={review.reviewVideo} />
                : <div className={classes.reviewerPhoto}><img src={review.image} alt={review.reviewerName} /></div>
            }
        </div>
    )
}

export default Review;