import { NavLink } from "react-router-dom";
import classes from "./vacancies.module.scss"

const Vacancies = ({ vacancieData }) => {

    return (
        <article className={classes.vacancies}>
            <span className={`${classes.name} ${vacancieData.HOT ? classes.hot : ""}`}>{vacancieData.name}</span>
            <span className={classes.salary}>Salary:{vacancieData.salary}</span>
            <span className={classes.location}>{vacancieData.location}</span>
            <NavLink className={classes.detailButton} to={`/career/${vacancieData.id}`}>VIEW DETAIL</NavLink>
        </article>
    )
}

export default Vacancies;