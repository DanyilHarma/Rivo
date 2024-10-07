import List from "../list/list";
import classes from "./requirements.module.scss"

const Requirements = ({ skills, pluses, duties }) => {
    return (
        <div className={classes.requirementsContainer}>
            <h2>Requirements</h2>
            <List listItem={skills} name="Required skills:" />
            <List listItem={pluses} name="Would be a plus:" />
            {duties && (<List listItem={duties} name="Duties:" />)}
        </div>
    )
}

export default Requirements;