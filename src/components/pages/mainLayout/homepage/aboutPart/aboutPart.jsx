import { forwardRef } from "react";
import TitleComponent from "../../../../general/titleComponent/titleComponent";
import AboutContent from "./aboutContent/aboutContent";
import classes from "./aboutPart.module.scss"

const AboutPart = forwardRef((props, ref) => {

    return (
        <div className={classes.aboutPartContainer} ref={ref}>
            <TitleComponent titleData={props.aboutData.bigTitles} />
            <AboutContent contentData={props.aboutData} />
            {props.aboutData.imagesBackground.map((image, index) => {
                return (<img key={index} src={image.imgSrc} style={{ top: image.top, left: image.left, right: image.right, width: image.width, maxWidth: image.maxWidth }} alt="" />)
            })}
        </div>
    )
})

AboutPart.displayName = "AboutPart";

export default AboutPart;