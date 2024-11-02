import ImagesContainer from "../../homepage/projectsPart/projects/imagesContainer/imagesContainer";
import classes from "./projectCard.module.scss"

const ProjectCard = ({ project, index, projectsItem }) => {
    const stack = project?.attributes?.Content[1]?.stack || [];

    return (
        <div className={classes.projectCardContainer}>
            <h2>{project.attributes.brand}</h2>
            <div className={classes.projectCardInfoContainer}>
                <p>{project.attributes.description}</p>
                <div className={classes.projectCardInfo}>
                    <div>
                        <h6>MVP development time</h6>
                        <span>{project.attributes.developTime} hours</span>
                    </div>
                    <div>
                        <h6>Technologies</h6>
                        <div className={classes.technologiesContainer}>
                            {stack.map((tech, index) => (
                                <img src={tech.imgSrc} alt="" key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <ImagesContainer data={project.attributes} index={index} projectsItem={projectsItem} allProjectPage={true} />
        </div>
    )
}

export default ProjectCard;