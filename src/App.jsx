import { Navigate, Route, Routes } from "react-router-dom"
import Homepage from "./components/pages/mainLayout/homepage/homepage.jsx"
import ContactFormResponse from "./components/general/contactFormResponse/contactFormResponse.jsx"
import Menu from "./components/pages/menuLayout/menu/menu.jsx"
import MainLayout from "./components/pages/mainLayout/mainLayout.jsx"
import MenuLayout from "./components/pages/menuLayout/menuLayout.jsx"
import CareerPage from "./components/pages/mainLayout/careerPage/careerPage.jsx"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="homepage" />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="/response/:type" element={<ContactFormResponse />} />
          <Route path="/career" element={<CareerPage />} />
        </Route>
        <Route element={<MenuLayout />}>
          <Route path="/menu" element={<Menu />} />
        </Route>
      </Routes>
    </div >
  )
}

export default App
