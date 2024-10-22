import classes from "./leftPart.module.scss";

const LeftPart = ({ headerProjectData }) => {

    const stackItem = headerProjectData.stack[0].stack || [];

    return (
        <div className={classes.projectHeaderInfo}>
            <h1>{headerProjectData.brand}</h1>
            <p>{headerProjectData.description}</p>
            <div className={classes.stackList}>
                {stackItem.map(item =>
                    <div className={classes.item} key={item.name}>
                        <img src={item.imgSrc} alt={item.name} />
                        <span>{item.name}</span>
                    </div>

                )}
            </div>
        </div>
    )
}

export default LeftPart;