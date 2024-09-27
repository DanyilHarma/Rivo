import { createContext, useContext, useRef, useState } from "react";

const ContactVisibilityContext = createContext();

export const useContactVisibility = () => useContext(ContactVisibilityContext);

export const ContactVisibilityProvider = ({ children }) => {
    const [isContactVisible, setIsContactVisible] = useState(false);
    const sectionRef = useRef();
    return (
        <ContactVisibilityContext.Provider value={{ isContactVisible, setIsContactVisible, sectionRef }}>
            {children}
        </ContactVisibilityContext.Provider>
    )
}