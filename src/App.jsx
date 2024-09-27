import { Navigate, Route, Routes } from "react-router-dom"
import Header from "./components/header/header.jsx"
import Homepage from "./components/pages/homepage/homepage.jsx"
import ContactButtonFixed from "./components/contactButtonFixed/contactButtonFixed.jsx"
import { ContactVisibilityProvider } from "./context/contextVisibility.jsx"
import Footer from "./components/general/footer/footer.jsx"
import BootstrapContainer from "./components/general/bootstrapContainer/bootstrapContainer.jsx"
import ContactFormResponse from "./components/general/contactFormResponse/contactFormResponse.jsx"
import TemplateMessageButtonContainer from "./components/general/templateMessageButtonContainer/templateMessageButtonContainer.jsx"

function App() {
  return (
    <div className="app">
      <ContactVisibilityProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="homepage" />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="/response/:type" element={<ContactFormResponse />} />
        </Routes>
        <TemplateMessageButtonContainer />
        <ContactButtonFixed />
        <BootstrapContainer>
          <Footer />
        </BootstrapContainer>
      </ContactVisibilityProvider>
    </div >
  )
}

export default App
