import { useCallback, useState } from "react";
import MakeButton from "../../../../../../header/navigation/makeOrderButton/makeOrderButton";
import classes from "./imagesContainer.module.scss"
import { NavLink } from "react-router-dom";

const ImagesContainer = ({ data, index, projectsItem, allProjectPage = false }) => {

    const [hoverImageIndex, setHoverImage] = useState(null)
    const handleHoverImageOn = useCallback((index) => {
        setHoverImage(index);
    }, [])
    const handleHoverImageOff = useCallback(() => {
        setHoverImage(null)
    }, [])

    return (
        <div className={classes.imageContainer}>
            <NavLink
                className={classes.imageWrapper}
                onMouseEnter={() => handleHoverImageOn(index)}
                onMouseLeave={handleHoverImageOff}
                to={`/projects/${data.brand}`}
            >
                <img src={data.mainImage} className={`${classes.projectImage} ${allProjectPage ? classes.full : ""}`} alt={data.name} />
                {hoverImageIndex === index && (<div className={classes.viewProject}>
                    <span>VIEW PROJECT</span><img src="https://github.com/DanyilHarma/Rivo/blob/master/src/assets/images/general/icons/Arrow_icon.png?raw=true" alt="" />
                </div>)}
            </NavLink>
            {index === projectsItem.length - 1 && (
                <div className={classes.showMoreButtonWrapper}>
                    <MakeButton text="SHOW MORE CASES" link="/projects" />
                </div>
            )}
        </div>
    )
}

export default ImagesContainer;