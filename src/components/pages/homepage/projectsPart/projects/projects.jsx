import { useGetProjectsDataQuery } from "../../../../../redux/apiSlice";
import classes from "./projects.module.scss"

const Projects = (props) => {
    const { data: projectsData, error, isLoading } = useGetProjectsDataQuery();
    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка при загрузке данных!</p>;

    return (
        <div className={classes.projectContainer}>
            {projectsData?.data?.attributes?.rivo_projects?.data[0]?.attributes?.projectsData.map(data => (
                <div key={data.id}>
                    <span>{data.name}</span>
                    <img src={data.mainImage} alt={data.name} />
                </div>
            ))}
            {/* <img src={image} style={{ top: image.top, left: image.left, right: image.right, width: image.width, maxWidth: image.maxWidth }} alt="" />        */}
        </div>
    )
}

export default Projects;