import classes from "./rightPart.module.scss";

const RightPart = ({ headerProjectData }) => {

    const projectDetails = [
        [
            { label: "client", value: headerProjectData.client },
            { label: "budget", value: headerProjectData.budget },
            { label: "brand", value: headerProjectData.brand }
        ],
        [
            { label: "clutch review", value: headerProjectData.clutchReview, stars: headerProjectData.clutchReview },
            { label: "location", value: headerProjectData.location },
            { label: "MVP Development time", value: headerProjectData.developTime, clock: "http://localhost:1338/uploads/Clock_icon_a1b976ba0a.svg?updatedAt=2024-10-10T11%3A01%3A15.163Z" }
        ]
    ]

    return (
        <div className={classes.projectHeaderInfo}>
            <img src={headerProjectData.logo} alt="" className={classes.logo} />
            <div className={classes.inner}>
                {projectDetails.map((column, colIndex) =>
                    <div key={colIndex} className={classes.col}>
                        {column.map((details, index) =>
                            <div key={index} className={classes.group}>
                                {details.stars ? (
                                    <>
                                        <span className={classes.label}>{details.label}</span>
                                        <div className={classes.starsWrapper}>
                                            <span className={classes.value}>{details.value + ".0"}</span>
                                            <div className={classes.stars}>
                                                {Array.from({ length: details.stars }).map((_, i) =>
                                                    <img key={i} src="http://localhost:1338/uploads/Star_1_55527824ee.svg?updatedAt=2024-10-14T09%3A29%3A49.159Z"
                                                        alt="stars" />
                                                )}
                                            </div>
                                        </div>
                                    </>
                                ) : details.clock ? <>
                                    <span className={classes.label}>{details.label}</span>
                                    <span className={classes.value}>
                                        <img src={details.clock} alt="" />
                                        {details.value}</span>
                                </>
                                    : (
                                        <>
                                            <span className={classes.label}>{details.label}</span>
                                            <span className={classes.value}>{details.value}</span>
                                        </>
                                    )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div >
    )

}

export default RightPart;