import BootstrapContainer from "../../../general/bootstrapContainer/bootstrapContainer";
import { useGetProjectsDataQuery } from "../../../../redux/requests/apiSliceProjects";
import TitleComponent from "../../../general/titleComponent/titleComponent";
import FilterComponent from "./filterComponent/filterComponent";
import ProjectCard from "./projectCard/projectCard";
import useFilteredProjects from "../../../../hooks/useFilteredProjects";
import { useCallback } from "react";

const ProjectsPage = () => {
    const { data: projectsData, error, isLoading } = useGetProjectsDataQuery();

    const projectDataContent = projectsData?.data[0] || [];
    const projects = projectDataContent?.attributes?.projectsData || [];

    const { categories, filteredProjects, selectedCategory, setSelectedCategory } = useFilteredProjects(projects);

    const handleCategoryClick = useCallback((category) => {
        setSelectedCategory(category);
    }, [])

    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка при загрузке данных!</p>;

    return (
        <BootstrapContainer>
            <TitleComponent titleData={projectDataContent?.attributes.titles.bigTitles} />
            <FilterComponent categories={categories} onFilterChange={handleCategoryClick} selectedCategory={selectedCategory} />
            {filteredProjects.map((project, index) => {
                return <ProjectCard key={project.id} project={project} index={index} projectsItem={projects} />
            }
            )}
        </BootstrapContainer>
    )
}

export default ProjectsPage;