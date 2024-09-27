import classes from "./templateMessageButton.module.scss"

const TemplateMessageButton = ({ onClick }) => {

    return (
        <div className={classes.templateMessageButton} onClick={onClick}>

        </div>
    )
}

export default TemplateMessageButton;