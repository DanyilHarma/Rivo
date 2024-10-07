import List from "../list/list";
import classes from "./offers.module.scss"
import Profit from "./profit/profit";

const Offers = ({ location, salary, benefites, profit }) => {

    return (
        <div className={classes.offersContainer}>
            <h2>We offer</h2>
            <div className={classes.vacancyInfo}>
                <div>
                    <h3>Location</h3>
                    <span>{location}</span>
                </div>
                <div>
                    <h3>Salary</h3>
                    <span>{salary}</span>
                </div>
            </div>
            <List listItem={benefites} name="Benefites" />
            <Profit profit={profit} />
        </div>
    )
}

export default Offers;