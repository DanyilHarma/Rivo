import ImagesHeader from "../pages/homepage/imagesHeader/imagesHeader";
import classes from "./overlay.module.scss"

const Overlay = ({ children, images, isMultiply }) => {

    const { firstCol, secondCol, thirdCol } = images.imagesHomepage;

    return (
        <div className={classes.overlay}>
            {isMultiply ? (<div className={classes.headerImagesContainer}><ImagesHeader col={firstCol} firstCol={true} /> <ImagesHeader col={secondCol} secondCol={true} /> <ImagesHeader col={thirdCol} thirdCol={true} /></div>) :
                (<img />)}
            {isMultiply ? images.backgroundHomepageImages.map((image, index) => (
                <img key={index} src={image.imgSrc} style={{ "position": "absolute", "top": `${image.top}`, "left": `${image.left}`, "right": `${image.right}` }} />
            )) : null}
            <div className={`container ${classes.overlayContent}`}>{children}</div>
        </div>
    )
}

export default Overlay;