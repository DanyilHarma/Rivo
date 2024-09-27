import { useDispatch, useSelector } from "react-redux";
import MakeButton from "../../../header/navigation/makeOrderButton/makeOrderButton";
import classes from "./templateMessagePopup.module.scss"
import { clearFormData } from "../../../../redux/reducers/formDataReducer";
import { useCallback } from "react";

const TemplateMessagePopup = ({ onClose }) => {

    const dispatch = useDispatch();
    const formData = useSelector(state => state.formData.formData)

    const handleConfirm = useCallback(() => {
        dispatch(clearFormData());
        onClose();
    }, [dispatch, onClose])

    return (
        <div className={classes.popupMessageContainer}>
            <div className={classes.popupMessage}>
                <div className={classes.messageTemplateHeader}>
                    <img src="https://github.com/DanyilHarma/Rivo/blob/master/src/assets/images/header/Rivo_logotype.png?raw=true" alt="" />
                    <img src="https://github.com/DanyilHarma/Rivo/blob/master/src/assets/images/general/backgroundImages/Element%20(1).png?raw=true" alt=""
                        style={{ maxWidth: "85px" }} />
                </div>
                <h2>NEW MESSAGE</h2>
                <div className={classes.clientInfoContainer}>
                    <div className={classes.clientInfoWrapper}>
                        <div className={classes.clientInfo}>
                            <span>CLIENT NAME</span>
                            <span>{formData.name}</span>
                        </div>
                        <div className={classes.clientInfo}>
                            <span>CLIENT PHONE</span>
                            <span>{formData.phone}</span>
                        </div>
                    </div>
                    <div className={classes.clientInfoWrapper}>
                        <div className={classes.clientInfo}>
                            <span>EMAIL</span>
                            <span>{formData.email}</span>
                        </div>
                        <div className={classes.clientInfo}>
                            <span>LOCATION</span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className={classes.clientMessageContainer}>
                    <div className={classes.clientMessage}>
                        <span>REFERENCE URL</span>
                        <span>http://rivo.agency/expertises/retail-and-e-commerce-software-development/</span>
                    </div>
                    <div className={classes.clientMessage}>
                        <span>MESSAGE</span>
                        <span>{formData.message}</span>
                    </div>
                </div>
                <MakeButton text="CONFIRM" onClose={handleConfirm} />
            </div>
        </div>
    )
}

export default TemplateMessagePopup;