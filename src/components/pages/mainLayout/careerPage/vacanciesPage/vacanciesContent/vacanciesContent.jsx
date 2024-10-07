import Offers from "./offers/offers";
import Requirements from "./requirements/requirements";
import classes from "./vacanciesContent.module.scss"

const VacanciesContent = ({ vacancieData }) => {

    return (
        <div className={classes.vacancieContent}>
            <Offers location={vacancieData.location} salary={vacancieData.salary} benefites={vacancieData.benefites} profit={vacancieData.profit} />
            <Requirements skills={vacancieData.skills} pluses={vacancieData.pluses} duties={vacancieData.duties} />
        </div>
    )
}

export default VacanciesContent;