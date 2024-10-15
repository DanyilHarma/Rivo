import { Route, Routes } from "react-router-dom";
import CareerPage from "../careerPage";
import VacanciesPage from "../vacanciesPage/vacanciesPage";

const CareerRoutes = () => {

    return (
        <Routes>
            <Route path="" element={<CareerPage />} />
            <Route path=":id" element={<VacanciesPage />} />
        </Routes>
    )
}

export default CareerRoutes;