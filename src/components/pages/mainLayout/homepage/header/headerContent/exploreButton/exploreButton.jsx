import classes from "./exploreButton.module.scss"


const ExploreButton = ({ aboutRef, isProject = false }) => {

    const handleClick = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className={classes.exploreButtonContainer}>
            <div className={`${classes.exploreButton} ${isProject ? classes.project : ""}`} onClick={handleClick}>
                <svg width="20px" height="30px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 15"><path stroke="#fff" d="M6.5 0v14m0 0L12 8.5M6.5 14L1 8.5" /></svg>
            </div>
            {isProject && (<span onClick={handleClick}>Explore</span>)}
        </div>
    )
}

export default ExploreButton;