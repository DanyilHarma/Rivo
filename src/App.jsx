import { Route, Routes } from "react-router-dom"
import Header from "./components/header/header.jsx"
import Homepage from "./components/pages/homepage/homepage.jsx"

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="homepage" element={<Homepage />} />
      </Routes>
    </div>
  )
}

export default App
