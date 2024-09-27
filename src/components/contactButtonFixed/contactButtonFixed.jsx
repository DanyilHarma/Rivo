import classes from "./contactButtonFixed.module.scss"
import { useContactVisibility } from "../../context/contextVisibility.jsx";

const ContactButtonFixed = () => {
    const { isContactVisible, sectionRef } = useContactVisibility();

    const handleClick = () => {
        if (isContactVisible) {
            window.scrollTo({ top: 0, behavior: "smooth" })
        } else {

            if (sectionRef.current) {
                sectionRef.current.scrollIntoView({ behavior: "smooth" })
            }
        }
    }

    return (
        <div className={classes.buttonContainer}>
            <button className={`${classes.topButton} ${isContactVisible ? classes.visible : classes.hidden} `} onClick={handleClick} style={{ width: "70px", height: "70px" }}> </button>
            <button to="#contactsSection" className={`${classes.contactButton} ${isContactVisible ? classes.hidden : classes.visible} `} onClick={handleClick}> </button>
        </div>
    )
}

export default ContactButtonFixed;