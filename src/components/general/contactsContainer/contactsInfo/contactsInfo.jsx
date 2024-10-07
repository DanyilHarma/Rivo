import DOMPurify from "dompurify";
import classes from "./contactsInfo.module.scss";
import SocietyIcon from "../../societyIcon/societyIcon";

const ContactsInfo = (props) => {

    return (
        <div className={classes.contactsInfo}>
            <h6 dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(props.infoData.title) }}></h6>
            <span>{props.infoData.location}</span>
            <div className={classes.numbers}>
                <span>{props.infoData.firstNumber}</span>
                <span>{props.infoData.secondNumber}</span>
            </div>
            <SocietyIcon />
        </div>
    );

}

export default ContactsInfo;