import ExploreButton from "./exploreButton/exploreButton";
import classes from "./headerContent.module.scss"
import HoverText from "./hoverText/hoverText"

const HeaderContent = ({ aboutRef }) => {
    return (
        <>
            <span className={classes.yellowText}>We are Rivo Agency </span>
            <p><HoverText>WE HELP</HoverText> <br /> <span className={classes.whiteText}>IDEAS</span> <br /> <span className={classes.whiteText}>TO CHANGE</span> <br /><HoverText>THE WORLD</HoverText></p>
            <ExploreButton aboutRef={aboutRef} />
        </>
    )
}

export default HeaderContent;