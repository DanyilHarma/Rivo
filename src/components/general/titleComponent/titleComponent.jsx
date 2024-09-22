import classes from "./titleComponent.module.scss"

const TitleComponent = (props) => {

    return (
        <div className={classes.titleContainer}>
            <h2 className={classes.title}>{props.titleData.bigTitle}</h2>
            <span className={classes.titleTransparent}>{props.titleData.bigTitleTransparent}</span>
        </div>
    )
}

export default TitleComponent;