import { ReactSVG } from "react-svg";
import classes from "./societyIcon.module.scss";
import facebook from "./Facebook_icon.svg"
import linkedin from "./LinkedIn_icon.svg"
import instagram from "./Instagram_icon.svg"
import twitter from "./Twitter.svg"


const icons = [
    facebook, linkedin, instagram, twitter
]

const SocietyIcon = () => {
    return (
        <div className={classes.iconContainer}>
            {icons.map((icon, index) => (
                <div key={index} className={classes.iconWrapper}>
                    <ReactSVG src={icon} className={classes.icon} />
                </div>
            ))}
        </div>
    )
}

export default SocietyIcon;