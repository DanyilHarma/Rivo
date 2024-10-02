import TitleComponent from "../../general/titleComponent/titleComponent";
import Contacts from "./contacts/contacts";
import classes from "./contactsContainer.module.scss";
import ContactsInfo from "./contactsInfo/contactsInfo";
import { useContactVisibility } from "../../../context/providers/contextVisibility";
import useVisibilityObserver from "../../../hooks/useVisibilityObserver";

const ContactsContainer = (props) => {

    const { setIsContactVisible, sectionRef } = useContactVisibility();

    useVisibilityObserver(sectionRef, setIsContactVisible, { threshold: 0.5 })
    return (
        <div className={classes.contactsContainer} ref={sectionRef} >
            <TitleComponent titleData={props.contactsData.bigTitles} />
            <div className={classes.contactsContent}>
                <Contacts />
                <ContactsInfo infoData={props.contactsData.contactsInfo} />
            </div>
            {props.contactsData.imagesBackground.map((image, index) => (
                <img key={index} src={image.imgSrc} alt="" style={{ top: image.top, left: image.left, right: image.right, width: image.width, maxWidth: image.maxWidth }} />
            ))}
        </div>
    );
};

export default ContactsContainer;