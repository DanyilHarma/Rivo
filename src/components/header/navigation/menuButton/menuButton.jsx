import { NavLink } from 'react-router-dom';
import classes from './menuButton.module.scss'


const MenuButton = () => {
    return (
        <NavLink className={classes.menu}>
            <img src="https://github.com/DanyilHarma/Rivo/blob/master/src/assets/images/general/icons/Burger_menu_icon.png?raw=true" />
            <li>menu</li>
        </NavLink>
    )
}

export default MenuButton;