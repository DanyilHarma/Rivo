import { useParams } from "react-router-dom";
import classes from "./projectPage.module.scss";
import { useGetProjectsDataQuery } from "../../../../../redux/requests/apiSliceProjects";
import Overlay from "../../../../general/overlay/overlay";
import ProjectHeader from "./projectHeader/projectHeader";
import ProjectContent from "./projectContent/projectContent";
import { useRef } from "react";

const ProjectPage = () => {
    const { data: projectsData, error, isLoading } = useGetProjectsDataQuery();
    const { id } = useParams();
    const refs = {
        sectionRef: useRef(null),
    };


    const projectDataContent = projectsData?.data[0] || [];
    const projects = projectDataContent?.attributes?.projectsData || [];

    const selectedProject = projects.find(project => project.brand === id)

    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка при загрузке данных!</p>;

    return (
        <>
            <Overlay isMultiply={false} projectImage={selectedProject.headerImage}>
                <ProjectHeader headerProjectData={selectedProject} aboutRef={refs.sectionRef} />
            </Overlay>

            <div className="container" style={{ position: "relative", height: "100%" }}>
                <ProjectContent sections={selectedProject.sections} sectionRef={refs.sectionRef} />
            </div>
        </>
    )
}

export default ProjectPage;