import classes from "./stack.module.scss"
import StackRow from "./stackRow/stackRow";

const Stack = (props) => {

    const stackData = props.stackData;

    const { titleWeb, firstRowWeb, secondRowWeb } = stackData.webDev;
    const { titleMob, firstRowMob } = stackData.mobileDev;
    const { titleDev, firstRowDev } = stackData.devops;

    return (
        <div className={classes.stack}>
            <h3>{titleWeb}</h3>
            <StackRow rows={firstRowWeb} />
            <StackRow rows={secondRowWeb} />
            <h3>{titleMob}</h3>
            <StackRow rows={firstRowMob} />
            <h3>{titleDev}</h3>
            <StackRow rows={firstRowDev} />
        </div>
    )
}

export default Stack;