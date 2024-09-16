import { NavLink } from 'react-router-dom';
import classes from './makeOrderButton.module.scss'


const MakeOrderButton = () => {
    return (
        <NavLink className={classes.order}>
            <li>MAKE ORDER</li>
            <img src="https://github.com/DanyilHarma/Rivo/blob/master/src/assets/images/general/icons/Arrow_icon.png?raw=true" />
        </NavLink>
    )
}

export default MakeOrderButton;