import TitleComponent from "../../../general/titleComponent/titleComponent";
import Services from "./services/services";
import classes from "./servicesPart.module.scss"

const ServicesPart = (props) => {

    return (
        <div className={classes.servicesPartContainer}>
            <TitleComponent titleData={props.servicesData.bigTitles} />
            <Services servicesData={props.servicesData.development} />
            <img src={props.servicesData.backgroundImage} alt="" />
        </div>
    )
}

export default ServicesPart;