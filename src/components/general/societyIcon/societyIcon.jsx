import { ReactSVG } from "react-svg";
import classes from "./societyIcon.module.scss";
import facebook from "./Facebook_icon.svg"
import linkedin from "./LinkedIn_icon.svg"
import instagram from "./Instagram_icon.svg"
import twitter from "./Twitter.svg"




const SocietyIcon = ({ isVacancies = false }) => {

    const selectedIcons =
        isVacancies ? [facebook, linkedin, instagram]
            : [facebook, linkedin, instagram, twitter]

    return (
        <div className={`${isVacancies ? classes.iconContainerHr : classes.iconContainer}`}>
            {selectedIcons.map((icon, index) => (
                <div key={index} className={`${isVacancies ? classes.iconWrapperHr : classes.iconWrapperMain}`}>
                    <ReactSVG src={icon} className={classes.icon} />
                </div>
            ))}
        </div>
    )
}

export default SocietyIcon;