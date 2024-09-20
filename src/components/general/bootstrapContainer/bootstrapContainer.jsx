import classes from "./bootstrapContainer.module.scss"

const BootstrapContainer = ({ children }) => {
    return (
        <div className={`container ${classes.bootstrapContainer}`}>
            {children}
        </div>
    )
}

export default BootstrapContainer;