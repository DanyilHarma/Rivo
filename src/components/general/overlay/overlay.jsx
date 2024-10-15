import ImagesHeader from "../../pages/mainLayout/homepage/header/imagesHeader/imagesHeader";
import classes from "./overlay.module.scss"

const Overlay = ({ children, images, isMultiply, backgroundImages, projectImage }) => {

    const { firstCol, secondCol, thirdCol } = images || [];

    return (
        <div className={`${classes.overlay} ${!isMultiply ? classes.project : ""}`}>
            {isMultiply ? (<div className={classes.headerImagesContainer}><ImagesHeader col={firstCol} firstCol={true} /> <ImagesHeader col={secondCol} secondCol={true} /> <ImagesHeader col={thirdCol} thirdCol={true} /></div>) :
                (<img src={projectImage} className={classes.projectImage} />)}
            {isMultiply && backgroundImages && backgroundImages.map((image, index) => (
                <img key={index} src={image.imgSrc} style={{ "position": "absolute", "top": `${image.top}`, "left": `${image.left}`, "right": `${image.right}` }} />
            ))}
            <div className={`container ${classes.overlayContent} ${!isMultiply ? classes.projectPage : ""}`}>{children}</div>
        </div>
    )
}

export default Overlay;