import useActiveLink from "../../../../../../hooks/useActiveLink";
import ProjectArticles from "./projectArticles/projectArticles";
import classes from "./projectContent.module.scss";
import ProjectNav from "./projectNav/projectNav";

const ProjectContent = ({ sections, sectionRef }) => {

    const { activeSectionIndices, sectionRefs } = useActiveLink(sections);

    return (
        <div className={classes.projectContentContainer}>
            <ProjectNav sections={sections} activeSectionIndices={activeSectionIndices} />
            <ProjectArticles articles={sections} sectionRef={sectionRef} sectionRefs={sectionRefs} />
        </div>
    )
}

export default ProjectContent;