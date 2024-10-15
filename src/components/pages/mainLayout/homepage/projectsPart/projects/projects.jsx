import { useGetProjectsDataQuery } from "../../../../../../redux/requests/apiSlice";
import classes from "./projects.module.scss"
import ImagesContainer from "./imagesContainer/imagesContainer";

const Projects = () => {
    const { data: projectsData, error, isLoading } = useGetProjectsDataQuery();
    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка при загрузке данных!</p>;
    const projectsItem = projectsData?.data?.attributes?.rivo_projects?.data[0]?.attributes?.projectsData;

    return (
        <div className={classes.projectContainer}>
            {projectsItem.map((data, index) => (
                <div key={data.id} className={classes.project}>
                    <span>{data.brand}</span>
                    <ImagesContainer data={data} index={index} projectsItem={projectsItem} />
                </div>
            ))}
        </div>
    )
}

export default Projects;