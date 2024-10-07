import { useLocation } from "react-router-dom";
import classes from "./bootstrapContainer.module.scss"

const BootstrapContainer = ({ children, isFooter = false }) => {
    const location = useLocation();
    const homepage = location.pathname === "/homepage"
    const mini = location.pathname === "/privacy";

    return (
        <div className={`container ${classes.bootstrapContainer} ${!homepage ? classes.homepage : ""} ${(!isFooter && mini && !homepage) ? classes.mini : ""}`}>
            {children}
        </div>
    )
}

export default BootstrapContainer;