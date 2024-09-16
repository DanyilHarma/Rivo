import { NavLink } from 'react-router-dom';
import classes from './navigation.module.scss'
import data from "./navigationData.json"

const Navigation = () => {
    // debugger
    return (
        <nav>
            <ul className={classes.headerList}>
                {data.navigationData.map((item, index) => (
                    <NavLink className={item.class ? classes[item.class] : ""} to={item.href} key={index}><li>{item.element}</li>{item.imgSrc ? (<img src={item.imgSrc} />) : null}</NavLink>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;