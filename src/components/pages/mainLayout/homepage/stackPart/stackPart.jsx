import TitleComponent from "../../../../general/titleComponent/titleComponent";
import classes from "./stackPart.module.scss"
import Stack from "./stack/stack";

const StackPart = (props) => {
    return (
        <div className={classes.stackContainer}>
            <TitleComponent titleData={props.stackData.bigTitles} />
            <Stack stackData={props.stackData.stack} />
            {props.stackData.imagesBackground.map((image, index) => (
                <img key={index} src={image.imgSrc} style={{ top: image.top, left: image.left, right: image.right, width: image.width, maxWidth: image.maxWidth }} alt="" />
            ))}
        </div>
    )
}

export default StackPart;