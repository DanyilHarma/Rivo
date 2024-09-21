import TitleComponent from "../../../general/titleComponent/titleComponent";
import Expertises from "./expertises/expertises";

import classes from "./industryExpertise.module.scss"

const IndustryExpertise = (props) => {

    return (
        <div className={classes.industryExpertiseContainer}>
            <TitleComponent titleData={props.industryExpertiseData.bigTitles} />
            <Expertises expertiseData={props.industryExpertiseData.expertises} />
            <img src={props.industryExpertiseData.backgroundImage} alt="" />
        </div>
    )
}

export default IndustryExpertise;