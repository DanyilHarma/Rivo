import TitleComponent from "../../../general/titleComponent/titleComponent";
import AboutContent from "./aboutContent/aboutContent";
import classes from "./aboutPart.module.scss"

const AboutPart = (props) => {

    return (
        <div className={classes.aboutPartContainer}>
            <TitleComponent titleData={props.aboutData.bigTitles} />
            <AboutContent contentData={props.aboutData} />
            {props.aboutData.imagesBackground.map((image, index) => {
                return (<img key={index} src={image.imgSrc} style={{ top: image.top, left: image.left, right: image.right, width: image.width, maxWidth: image.maxWidth }} alt="" />)
            })}
        </div>
    )
}

export default AboutPart;