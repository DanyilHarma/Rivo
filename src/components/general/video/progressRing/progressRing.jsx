import React from 'react';
import classes from './progressRing.module.scss';

const ProgressRing = ({ progress }) => {
    const circleRadius = 140;
    const circleCircumference = 2 * Math.PI * circleRadius;
    const strokeDashoffset =
        circleCircumference - (progress / 100) * circleCircumference;

    return (
        <svg className={classes.progressRing} width="350px" height="350px">
            <circle
                className={classes.progress}
                cx="175"
                cy="175"
                r={circleRadius}
                strokeWidth={1 + (progress / 100) * 16}
                strokeDasharray={circleCircumference}
                strokeDashoffset={strokeDashoffset}
                transform="rotate(-90 175 175)"
            />
        </svg>
    );
};

export default ProgressRing;
