import classes from "./contactButtonFixed.module.scss"
import { useContactVisibility } from "../../context/providers/contextVisibility";
import { useLocation } from "react-router-dom";

const ContactButtonFixed = () => {
    const { isContactVisible, sectionRef } = useContactVisibility();

    const location = useLocation()
    const isSpecialPage =
        ["/menu", "/privacy", "/projects", "/projects/category"].includes(location.pathname) ||
        /^\/projects\/category/.test(location.pathname);

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
        <>
            {!isSpecialPage && (<div className={classes.buttonContainer}>
                <button className={`${classes.topButton} ${isContactVisible ? classes.visible : classes.hidden} `} onClick={handleClick} style={{ width: "70px", height: "70px" }}> </button>
                <button className={`${classes.contactButton} ${isContactVisible ? classes.hidden : classes.visible} `} onClick={handleClick}> </button>
            </div>)}
        </>
    )
}

export default ContactButtonFixed;