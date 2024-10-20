import ProjectArticles from "./projectArticles/projectArticles";
import classes from "./projectContent.module.scss";
import ProjectNav from "./projectNav/projectNav";

const ProjectContent = ({ sections }) => {

    return (
        <div className={classes.projectContentContainer}>
            <ProjectNav sections={sections} />
            <ProjectArticles articles={sections} />
        </div>
    )
}

export default ProjectContent;