import { useParams } from "react-router-dom";
import classes from "./projectPage.module.scss";
import { useGetProjectsDataQuery } from "../../../../../redux/requests/apiSliceProjects";
import Overlay from "../../../../general/overlay/overlay";
import ProjectHeader from "./projectHeader/projectHeader";
import ProjectContent from "./projectContent/projectContent";
import { useRef } from "react";
import BootstrapContainer from "../../../../general/bootstrapContainer/bootstrapContainer";
import Review from "../../../../general/reviews/review/review";
import TitleComponent from "../../../../general/titleComponent/titleComponent";
import { useGetHomepageDataQuery } from "../../../../../redux/requests/apiSlice";
import ContactsContainer from "../../../../general/contactsContainer/contactsContainer";

const ProjectPage = () => {
    const { data: projectsData, error, isLoading } = useGetProjectsDataQuery();
    const { data: data, error1, isLoading2 } = useGetHomepageDataQuery();

    const { id } = useParams();
    const refs = {
        sectionRef: useRef(null),
    };

    const projectDataContent = projectsData?.data || [];
    const projects = projectDataContent.map(project => project?.attributes);

    const selectedProject = projects.find(project => project.brand === id)

    if (isLoading || isLoading2) return <p>Загрузка...</p>;
    if (error || error1) return <p>Ошибка при загрузке данных!</p>;

    return (
        <>
            <Overlay isMultiply={false} projectImage={selectedProject.headerImage}>
                <ProjectHeader headerProjectData={selectedProject} aboutRef={refs.sectionRef} />
            </Overlay>

            <div className="container" style={{ position: "relative", height: "100%", marginBottom: "100px" }}>
                <ProjectContent sections={selectedProject.sections} sectionRef={refs.sectionRef} />
            </div>

            <BootstrapContainer>
                <TitleComponent titleData={data?.data?.attributes?.reviewsHomepageData?.bigTitles} isProjectPage={true} />
                <Review review={selectedProject.Content[0]} />
                <ContactsContainer contactsData={data?.data?.attributes?.contactsHomepageData} />
            </BootstrapContainer>
        </>
    )
}

export default ProjectPage;