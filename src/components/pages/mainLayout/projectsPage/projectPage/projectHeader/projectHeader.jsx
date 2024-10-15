import { NavLink } from "react-router-dom";
import BootstrapContainer from "../../../../../general/bootstrapContainer/bootstrapContainer";
import classes from "./projectHeader.module.scss";
import ExploreButton from "../../../homepage/header/headerContent/exploreButton/exploreButton";
import LeftPart from "./leftPart/leftPart";
import RightPart from "./rightPart/rightPart";

const ProjectHeader = ({ headerProjectData }) => {
    return (
        <BootstrapContainer>
            <NavLink to="/projects" className={classes.backToPrev}>back to cases</NavLink>
            <div className={classes.projectHeaderInfoContainer}>
                <LeftPart headerProjectData={headerProjectData} />
                <RightPart headerProjectData={headerProjectData} />
            </div>
            <ExploreButton aboutRef={headerProjectData.aboutRef} isProject={true} />
        </BootstrapContainer>
    )
}

export default ProjectHeader;