import ExpertiseRow from "./expertiseRow/expertiseRow";
import classes from "./expertises.module.scss"

const Expertises = (props) => {

    const { firstRow, secondRow } = props.expertiseData;

    return (
        <div className={classes.expertises}>
            <ExpertiseRow rows={firstRow} />
            <ExpertiseRow rows={secondRow} />
        </div>
    )
}

export default Expertises;