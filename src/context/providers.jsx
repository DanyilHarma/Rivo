import { ContactVisibilityProvider } from "./providers/contextVisibility";

const Providers = ({ children }) => {
    return (
        <ContactVisibilityProvider>
            {children}
        </ContactVisibilityProvider>
    )
}

export default Providers;