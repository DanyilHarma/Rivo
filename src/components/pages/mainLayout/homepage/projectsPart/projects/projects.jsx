import { useState } from "react";
import { useGetProjectsDataQuery } from "../../../../../../redux/requests/apiSlice";
import MakeButton from "../../../../../header/navigation/makeOrderButton/makeOrderButton";
import classes from "./projects.module.scss"
import { NavLink } from "react-router-dom";

const Projects = () => {
    const [hoverImageIndex, setHoverImage] = useState(null)
    const { data: projectsData, error, isLoading } = useGetProjectsDataQuery();
    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка при загрузке данных!</p>;
    const projectsItem = projectsData?.data?.attributes?.rivo_projects?.data[0]?.attributes?.projectsData;

    const handleHoverImageOn = (index) => {
        setHoverImage(index);
    }
    const handleHoverImageOff = () => {
        setHoverImage(null)
    }

    return (
        <div className={classes.projectContainer}>
            {projectsItem.map((data, index) => (
                <div key={data.id} className={classes.project}>
                    <span>{data.name}</span>
                    <div className={classes.imageContainer}>
                        <NavLink
                            className={classes.imageWrapper}
                            onMouseEnter={() => handleHoverImageOn(index)}
                            onMouseLeave={handleHoverImageOff}
                        >
                            <img src={data.mainImage} alt={data.name} />
                            {hoverImageIndex === index && (<div className={classes.viewProject}>
                                <span>VIEW PROJECT</span><img src="https://github.com/DanyilHarma/Rivo/blob/master/src/assets/images/general/icons/Arrow_icon.png?raw=true" alt="" />
                            </div>)}
                        </NavLink>
                        {index === projectsItem.length - 1 && (
                            <div className={classes.showMoreButtonWrapper}>
                                <MakeButton text="SHOW MORE CASES" />
                            </div>
                        )}
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Projects;