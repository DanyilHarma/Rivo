import classes from "./expertiseRow.module.scss"

const ExpertiseRow = (props) => {

    return (
        <div className={`row ${classes.expertisesContainer}`}>
            {props.rows.map((row, index) => (
                <div key={index} className={`col-3 ${classes.expertise}`}>
                    <span>{row}</span>
                </div>
            ))}
        </div>
    )
}

export default ExpertiseRow;

