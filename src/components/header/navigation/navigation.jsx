import { NavLink } from 'react-router-dom';
import classes from './navigation.module.scss'
import data from "./navigationData.json"
import MakeOrderButton from './makeOrderButton/makeOrderButton';
import MenuButton from './menuButton/menuButton';

const Navigation = () => {
    return (
        <nav>
            <ul className={classes.headerListContainer}>
                {data.navigationData.map((item, index) => (
                    <NavLink className={`${classes.headerList} ${item.class ? classes[item.class] : ""}`} to={item.href} key={index}><li>{item.element}</li><img src={item.imgSrc} /></NavLink>
                ))}
                <MakeOrderButton />
                <MenuButton />
            </ul>
        </nav >
    )
}

export default Navigation;