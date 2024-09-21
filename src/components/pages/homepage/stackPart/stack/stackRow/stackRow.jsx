import classes from "./stackRow.module.scss"

const StackRow = (props) => {

    return (
        <div className={`row ${classes.stackContainer}`}>
            {props.rows.map((row, index) => (
                <div key={index} className={`col-2 ${classes.stack}`}>
                    <img src={row.imgSrc} alt={row.name} />
                    <span>{row.name}</span>
                </div>
            ))}
        </div>
    )
}

export default StackRow;