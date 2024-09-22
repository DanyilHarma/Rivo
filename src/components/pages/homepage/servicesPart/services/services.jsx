
import { NavLink } from "react-router-dom";
import classes from "./services.module.scss"

const Services = (props) => {
    return (
        <div className={classes.servicesContainer}>
            {props.servicesData.map((service, index) => (
                <div key={index} className={classes.service}>
                    <img src={service.imgSrc} alt={service.name} />
                    <h5>{service.name}</h5>
                    <p>{service.descriptionText}</p>
                    <NavLink><span>MAKE ORDER</span><img src="https://github.com/DanyilHarma/Rivo/blob/master/src/assets/images/general/icons/Arrow_icon.png?raw=true" alt="" /></NavLink>
                </div>
            ))}
        </div>
    )
}

export default Services;