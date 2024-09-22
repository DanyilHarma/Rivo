import { Navigate, Route, Routes } from "react-router-dom"
import Header from "./components/header/header.jsx"
import Homepage from "./components/pages/homepage/homepage.jsx"
import ContactButtonFixed from "./components/contactButtonFixed/contactButtonFixed.jsx"

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="homepage" />} />
        <Route path="homepage" element={<Homepage />} />
      </Routes>
      <ContactButtonFixed />
    </div>
  )
}

export default App
