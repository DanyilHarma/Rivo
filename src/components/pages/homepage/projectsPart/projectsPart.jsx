import classes from "./projectsPart.module.scss"
import TitleComponent from "../../../general/titleComponent/titleComponent";
import Projects from "./projects/projects";


const ProjectsPart = (props) => {

    return (
        <div className={classes.projectsContainer}>
            <TitleComponent titleData={props.projectsData.bigTitles} />
            <Projects />
            {/* <img src={image} style={{ top: image.top, left: image.left, right: image.right, width: image.width, maxWidth: image.maxWidth }} alt="" />        */}
        </div>
    )
}

export default ProjectsPart;