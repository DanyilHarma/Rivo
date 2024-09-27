import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import TemplateMessageButton from "./templateMessageButton/templateMessageButton";
import TemplateMessagePopup from "./templateMessagePopup/templateMessagePopup";

const TemplateMessageButtonContainer = () => {
    const formData = useSelector(state => state.formData.formData);
    const [state, setState] = useState({
        showButton: false,
        showPopup: false
    });


    useEffect(() => {
        if (formData && !state.showButton) {
            const timer = setTimeout(() => {
                setState((prevState) => ({
                    ...prevState,
                    showButton: true
                }))
            }, 10000)
            return () => clearTimeout(timer)
        }
    }, [formData, state.showButton])

    const handleOpenPopup = useCallback(() => {
        setState((prevState) => ({
            ...prevState,
            showPopup: true
        }))
    }, [])

    return (
        <>
            {state.showButton ? <TemplateMessageButton onClick={handleOpenPopup} /> : null}
            {state.showPopup ? <TemplateMessagePopup onClose={() => setState((prevState) => ({ ...prevState, showPopup: false, showButton: false }))} /> : null}
        </>
    )
}

export default TemplateMessageButtonContainer;