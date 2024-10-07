import classes from "./vacanciesImages.module.scss"

const VacanciesImages = ({ vacanciesImages }) => {

    return (
        <div className={classes.vacanciesImages}>
            {vacanciesImages.map((image, index) => (
                <img key={index} src={image} alt="" />
            ))}
        </div>
    )
}

export default VacanciesImages;