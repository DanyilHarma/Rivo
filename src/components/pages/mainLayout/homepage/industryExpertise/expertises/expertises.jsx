import { useCallback, useMemo } from "react";
import ExpertiseRow from "./expertiseRow/expertiseRow";
import classes from "./expertises.module.scss"

const Expertises = ({ categories }) => {

    const getExpertiseType = useCallback((expertise) => {
        const expertiseItems = expertise.attributes.type;

        if (expertiseItems && expertiseItems.length > 0) {
            return expertiseItems;
        }
        return null;
    }, []);

    const { firstRowTypes, secondRowTypes } = useMemo(() => {
        const middleIndex = Math.ceil(categories.length / 2);
        const firstRow = categories.slice(0, middleIndex);
        const secondRow = categories.slice(middleIndex);

        const firstRowTypes = firstRow.map(getExpertiseType).filter(Boolean);
        const secondRowTypes = secondRow.map(getExpertiseType).filter(Boolean);
        return { firstRowTypes, secondRowTypes };
    }, [categories, getExpertiseType])

    if (!categories || categories.length === 0) return null;

    return (
        <div className={classes.expertises}>
            <ExpertiseRow rows={firstRowTypes} />
            <ExpertiseRow rows={secondRowTypes} />
        </div>
    )
}

export default Expertises;