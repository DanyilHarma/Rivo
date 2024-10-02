import DOMPurify from "dompurify";
import classes from "./aboutContent.module.scss"
import Video from "../../../../../general/video/video";

const AboutContent = (props) => {
    return (
        <div className={classes.aboutContantContainer}>
            <div className={classes.aboutContentWrapper}>
                <h2 className={classes.aboutContantTitle}>{props.contentData.titleSmall1}</h2>
                <p dangerouslySetInnerHTML={{ "__html": props.contentData.text1 }}></p>
                <Video videoData={props.contentData.video} />
            </div>
            <div className={classes.aboutContentWrapper}>
                <h2 className={classes.aboutContantTitle}>{props.contentData.titleSmall2}</h2>
                <p dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(props.contentData.text2) }}></p>
                <div className={classes.gradeContainer}>
                    <img src={props.contentData.icon} alt="" />
                    <div className={classes.grade}>
                        <div className={classes.stars}>
                            {props.contentData.stars.map((star, index) =>
                                (<img key={index} src={star} />)
                            )}
                        </div>
                        <span>{props.contentData.reviewCount}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutContent;