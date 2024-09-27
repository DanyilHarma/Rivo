import React from "react";
import ProgressCircle from "./progressCircle/progressCircle";
import classes from "./progressCircles.module.scss";

const ProgressCircles = ({ progressArray, currentIndex }) => {
    return (
        <div className={classes.progressCircle}>
            {progressArray.map((progress, index) => (
                <ProgressCircle key={index} progress={progress} isActive={index === currentIndex} />
            ))}
        </div>
    )
}

export default React.memo(ProgressCircles);

