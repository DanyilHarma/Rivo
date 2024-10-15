import { Route, Routes } from "react-router-dom";
import ProjectsPage from "../projectsPage";
import ProjectPage from "../projectPage/projectPage";

const ProjectsRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<ProjectsPage />} />
            <Route path=":id" element={<ProjectPage />} />
        </Routes>
    )
}

export default ProjectsRoutes;