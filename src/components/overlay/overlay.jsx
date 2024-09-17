import classes from "./overlay.module.scss"

const Overlay = ({ children, images }) => {

    return (
        <div className={classes.overlay}>

            <div className={`container ${classes.overlayContent}`}>{children}</div>
        </div>
    )
}

export default Overlay;