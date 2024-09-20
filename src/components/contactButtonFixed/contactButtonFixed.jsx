import { NavLink } from "react-router-dom";
import classes from "./contactButtonFixed.module.scss"

const ContactButtonFixed = () => {

    return (
        <NavLink className={classes.contactButton}>
            {/* <img src="https://github.com/DanyilHarma/Rivo/blob/master/src/assets/images/general/backgroundImages/Contact%20us%20big.png?raw=true" alt="" /> */}

        </NavLink>
    )
}

export default ContactButtonFixed;