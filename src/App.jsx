import { Navigate, Route, Routes } from "react-router-dom"
import Homepage from "./components/pages/mainLayout/homepage/homepage.jsx"
import ContactFormResponse from "./components/general/contactFormResponse/contactFormResponse.jsx"
import Menu from "./components/pages/menuLayout/menu/menu.jsx"
import MainLayout from "./components/pages/mainLayout/mainLayout.jsx"
import MenuLayout from "./components/pages/menuLayout/menuLayout.jsx"
import CareerPage from "./components/pages/mainLayout/careerPage/careerPage.jsx"
import ScrollToTop from "./components/scrollToTop/scrollToTop.jsx"
import VacanciesPage from "./components/pages/mainLayout/careerPage/vacanciesPage/vacanciesPage.jsx"
import PrivacyPage from "./components/pages/mainLayout/privacyPage/privacyPage.jsx"

function App() {
  return (
    <div className="app">
      <ScrollToTop>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Navigate to="homepage" />} />
            <Route path="homepage" element={<Homepage />} />
            <Route path="/response/:type" element={<ContactFormResponse />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/career/:id" element={<VacanciesPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Route>
          <Route element={<MenuLayout />}>
            <Route path="/menu" element={<Menu />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </div >
  )
}

export default App
