import classes from "./imagesHeader.module.scss"

const ImagesHeader = (props) => {

    const classNames = props.firstCol
        ? classes.firstCol
        : props.secondCol
            ? classes.secondCol
            : props.thirdCol
                ? classes.thirdCol
                : "";



    return (
        <div className={classNames}>
            {props.col.map((item, index) => (
                <img key={index} src={item} />
            ))}
        </div>
    )
}

export default ImagesHeader;