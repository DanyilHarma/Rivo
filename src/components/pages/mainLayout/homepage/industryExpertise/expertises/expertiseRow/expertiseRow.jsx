import { NavLink } from "react-router-dom";
import classes from "./expertiseRow.module.scss"
import { formatText } from "../../../../../../../utils/formatText";

const ExpertiseRow = (props) => {

    return (
        <div className={`row ${classes.expertisesContainer}`}>
            {props.rows.map((row, index) => {
                const formattedText = formatText(row);

                return <div key={index} className={`col-3 ${classes.expertise}`}>
                    <NavLink to={`/expertises/${formattedText}`}>{row}</NavLink>
                </div>
            })}
        </div>
    )
}

export default ExpertiseRow;

