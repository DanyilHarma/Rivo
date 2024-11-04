import { NavLink } from "react-router-dom";
import BootstrapContainer from "../../../../../general/bootstrapContainer/bootstrapContainer";
import classes from "./projectHeader.module.scss";
import ExploreButton from "../../../homepage/header/headerContent/exploreButton/exploreButton";
import LeftPart from "./leftPart/leftPart";
import RightPart from "./rightPart/rightPart";

const ProjectHeader = ({ headerProjectData, aboutRef }) => {
    const category = headerProjectData?.expertise?.data[0]?.attributes?.expertiseData[0]?.type;

    return (
        <BootstrapContainer>
            <NavLink to="/projects" className={classes.backToPrev}>back to cases</NavLink>

            <NavLink to={`/projects/category/${category}`} className={classes.category}>
                <button><svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 17H3C1.89543 17 1 16.1046 1 15V3C1 1.89543 1.89543 1 3 1H7.5L11 3.5H21C22.1046 3.5 23 4.39543 23 5.5V15C23 16.1046 22.1046 17 21 17Z" stroke="#B6B6B6" strokeWidth="1.5" />
                </svg>{category}</button>
            </NavLink>
            <div className={classes.projectHeaderInfoContainer}>
                <LeftPart headerProjectData={headerProjectData} />
                <RightPart headerProjectData={headerProjectData} />
            </div>
            <ExploreButton aboutRef={aboutRef} isProject={true} />
        </BootstrapContainer>
    )
}

export default ProjectHeader;