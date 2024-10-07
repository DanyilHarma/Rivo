import TitleComponent from "../../general/titleComponent/titleComponent";
import Contacts from "./contacts/contacts";
import classes from "./contactsContainer.module.scss";
import ContactsInfo from "./contactsInfo/contactsInfo";
import { useContactVisibility } from "../../../context/providers/contextVisibility";
import useVisibilityObserver from "../../../hooks/useVisibilityObserver";
import ContactsHr from "./contactsHr/contactsHr";

const ContactsContainer = ({ contactsData, isVacancies = false }) => {
    const { setIsContactVisible, sectionRef } = useContactVisibility();
    const { bigTitles, contactsInfo, imagesBackground } = contactsData || {};
    useVisibilityObserver(sectionRef, setIsContactVisible, { threshold: 0.5 });

    if (!bigTitles || !contactsInfo || !imagesBackground) {
        return null;
    };

    return (
        <div className={classes.contactsContainer} ref={sectionRef} >
            <TitleComponent titleData={bigTitles} />
            <div className={classes.contactsContent}>
                <Contacts />
                {isVacancies ? (<ContactsHr isVacancies={isVacancies} />) : (<ContactsInfo infoData={contactsInfo} />)}
            </div>
            {isVacancies ? null : imagesBackground.map((image, index) => (
                <img key={index} src={image.imgSrc} alt="" style={{ top: image.top, left: image.left, right: image.right, width: image.width, maxWidth: image.maxWidth }} />
            ))}
        </div>
    );
};

export default ContactsContainer;