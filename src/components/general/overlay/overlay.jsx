import ImagesHeader from "../../pages/homepage/header/imagesHeader/imagesHeader";
import classes from "./overlay.module.scss"

const Overlay = ({ children, images, isMultiply, backgroundImages }) => {

    const { firstCol, secondCol, thirdCol } = images;

    return (
        <div className={classes.overlay}>
            {isMultiply ? (<div className={classes.headerImagesContainer}><ImagesHeader col={firstCol} firstCol={true} /> <ImagesHeader col={secondCol} secondCol={true} /> <ImagesHeader col={thirdCol} thirdCol={true} /></div>) :
                (<img />)}
            {isMultiply ? backgroundImages.map((image, index) => (
                <img key={index} src={image.imgSrc} style={{ "position": "absolute", "top": `${image.top}`, "left": `${image.left}`, "right": `${image.right}` }} />
            )) : null}
            <div className={`container ${classes.overlayContent}`}>{children}</div>
        </div>
    )
}

export default Overlay;