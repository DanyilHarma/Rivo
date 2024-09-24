import React from "react";
import classes from "./progressCircle.module.scss";

const ProgressCircle = ({ progress, isActive }) => {
    const circleRadius = 8;
    const circleCircumference = 2 * Math.PI * circleRadius;
    const strokeDashoffset =
        circleCircumference - (progress / 100) * circleCircumference;

    return (
        <svg
            className={`${classes.progressCircle} ${isActive ? classes.active : ""}`}
            width="20"
            height="20"
        >
            <circle
                className={classes.circleBg}
                cx="10"
                cy="10"
                r={circleRadius}
            />
            <circle
                className={classes.circle}
                cx="10"
                cy="10"
                r={circleRadius}
                strokeDasharray={circleCircumference}
                strokeDashoffset={strokeDashoffset}
            />
        </svg>
    )
}

export default React.memo(ProgressCircle);

