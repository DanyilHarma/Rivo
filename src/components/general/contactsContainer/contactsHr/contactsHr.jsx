import SocietyIcon from "../../societyIcon/societyIcon";
import classes from "./contactsHr.module.scss";
import svg from "./Element big.svg"
import hrImage from "./image 42.png"

const ContactsHr = ({ isVacancies }) => {

    return (
        <div className={classes.contactsHr}>
            <img src={svg} alt="" />
            <div className={classes.hrContent}>
                <img src={hrImage} alt="" />
                <div className={classes.hrInfoContainer}>
                    <div className={classes.hrInfoWrapper}>
                        <div className={classes.hrInfo}>
                            <div className={classes.name}>Julia Turovska</div>
                            <div className={classes.position}>HR Director</div>
                        </div>
                        <a className={classes.phone} href="tel:+380964247150">+380 96 424 71 50</a>
                    </div>
                    <div className={classes.hrInfoWrapper}>
                        <div className={classes.sendButtonWrapper}><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.23741 6.88796C6.06923 4.63001 9.29121 3.14143 10.9033 2.42222C15.5063 0.368731 16.4627 0.0120186 17.0861 0.000114193C17.2232 -0.00235084 17.5298 0.0340956 17.7284 0.206929C17.8961 0.352865 17.9422 0.550006 17.9643 0.68837C17.9864 0.826734 18.0139 1.14193 17.992 1.38822C17.7426 4.19928 16.6633 11.021 16.1142 14.1694C15.8818 15.5017 15.4244 15.9484 14.9815 15.9921C14.0189 16.0871 13.288 15.3098 12.3558 14.6543C10.897 13.6287 10.0729 12.9902 8.65691 11.9894C7.02048 10.8327 8.08131 10.197 9.0139 9.15804C9.25797 8.88615 13.4988 4.74875 13.5809 4.37343C13.5912 4.32649 13.6007 4.15151 13.5038 4.05912C13.4069 3.96673 13.2639 3.99833 13.1606 4.02345C13.0143 4.05907 10.6839 5.71119 6.16938 8.97983C5.5079 9.46702 4.90875 9.7044 4.37193 9.69196C3.78013 9.67824 2.64175 9.33306 1.79548 9.038C0.757494 8.6761 -0.0674757 8.48477 0.00436067 7.87015C0.0417775 7.55002 0.452793 7.22262 1.23741 6.88796Z" fill="#212121" />
                        </svg>  <a href="https://t.me/recr_rivo" className={classes.sendButton}
                            target="_blank">SEND MESSAGE</a></div>
                        <SocietyIcon isVacancies={isVacancies} />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ContactsHr;