import { Outlet } from "react-router-dom"
import ContactButtonFixed from "../../contactButtonFixed/contactButtonFixed"
import BootstrapContainer from "../../general/bootstrapContainer/bootstrapContainer"
import Footer from "../../general/footer/footer"
import TemplateMessageButtonContainer from "../../general/templateMessageButtonContainer/templateMessageButtonContainer"
import Header from "../../header/header"


const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <TemplateMessageButtonContainer />
            <ContactButtonFixed />
            <BootstrapContainer isFooter={true}>
                <Footer />
            </BootstrapContainer>
        </>
    )
}

export default MainLayout;