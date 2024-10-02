import classes from "./projectsPart.module.scss"
import TitleComponent from "../../../../general/titleComponent/titleComponent";
import Projects from "./projects/projects";

const ProjectsPart = (props) => {
    return (
        <div className={classes.projectsContainer}>
            <TitleComponent titleData={props.projectsData.bigTitles} />
            <Projects />
            <img src="https://github.com/DanyilHarma/Rivo/blob/master/src/assets/images/general/backgroundImages/Element%20big%20(1).png?raw=true" alt="" />
        </div>
    )
}

export default ProjectsPart;