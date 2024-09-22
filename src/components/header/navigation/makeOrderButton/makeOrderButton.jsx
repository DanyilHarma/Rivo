import { NavLink } from 'react-router-dom';
import classes from './makeOrderButton.module.scss'


const MakeButton = (props) => {
    return (
        <NavLink className={classes.order}>
            <li>{props.text}</li>
            <img src="https://github.com/DanyilHarma/Rivo/blob/master/src/assets/images/general/icons/Arrow_icon.png?raw=true" />
        </NavLink>
    )
}

export default MakeButton;