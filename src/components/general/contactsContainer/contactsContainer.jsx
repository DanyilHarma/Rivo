import TitleComponent from "../titleComponent/titleComponent";
import Contacts from "./contacts/contacts";
import classes from "./contactsContainer.module.scss";
import ContactsInfo from "./contactsInfo/contactsInfo";

const ContactsContainer = (props) => {

    return (
        <div className={classes.contactsContainer}>
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

}

export default ContactsContainer;