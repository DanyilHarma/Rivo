import classes from "./titleComponent.module.scss"

const TitleComponent = ({ titleData, isProjectPage = false }) => {

    return (
        <div className={`${classes.titleContainer}${isProjectPage ? classes.isProjectPage : ""}`}>
            <h2 className={classes.title}>{titleData?.bigTitle}</h2>
            <span className={classes.titleTransparent}>{titleData?.bigTitleTransparent}</span>
        </div>
    )
}

export default TitleComponent;