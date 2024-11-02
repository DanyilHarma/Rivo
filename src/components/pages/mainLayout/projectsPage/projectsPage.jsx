import BootstrapContainer from "../../../general/bootstrapContainer/bootstrapContainer";
import { useGetProjectsDataQuery } from "../../../../redux/requests/apiSliceProjects";
import TitleComponent from "../../../general/titleComponent/titleComponent";
import FilterComponent from "./filterComponent/filterComponent";
import ProjectCard from "./projectCard/projectCard";
import useFilteredProjects from "../../../../hooks/useFilteredProjects";
import { useCallback } from "react";
import { useGetHomepageDataQuery } from "../../../../redux/requests/apiSlice";

const ProjectsPage = () => {
    const { data: projectsData, error, isLoading } = useGetProjectsDataQuery();
    const { data: projectsTitle, error1, isLoading2 } = useGetHomepageDataQuery();

    const projects = projectsData?.data || [];

    const { categories, filteredProjects, selectedCategory, setSelectedCategory } = useFilteredProjects(projects);

    const handleCategoryClick = useCallback((category) => {
        setSelectedCategory(category);
    }, [])



    const titleData = projectsTitle?.data?.attributes.projectsTitle.bigTitles;

    if (isLoading || isLoading2) return <p>Загрузка...</p>;
    if (error || error1) return <p>Ошибка при загрузке данных!</p>;

    return (
        <BootstrapContainer>
            <TitleComponent titleData={titleData} isProjectPage={true} />
            <FilterComponent categories={categories} onFilterChange={handleCategoryClick} selectedCategory={selectedCategory} />
            {filteredProjects.map((project, index) => {
                return <ProjectCard key={project.id} project={project} index={index} projectsItem={project} />
            }
            )}
        </BootstrapContainer>
    )
}

export default ProjectsPage;