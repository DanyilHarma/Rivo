import { NavLink } from 'react-router-dom'
import classes from './makeOrderButton.module.scss'

const MakeButton = (props) => {
    return (
        <>
            {props.link ? (<NavLink to={props.link} className={classes.link}>
                <button className={classes.order} type={props.isForm ? "submit" : ""} onClick={props.onClose}>
                    <li>{props.text}</li>
                    <img src="https://github.com/DanyilHarma/Rivo/blob/master/src/assets/images/general/icons/Arrow_icon.png?raw=true" />
                </button>
            </NavLink>) : <button className={classes.order} type={props.isForm ? "submit" : ""} onClick={props.onClose}>
                <li>{props.text}</li>
                <img src="https://github.com/DanyilHarma/Rivo/blob/master/src/assets/images/general/icons/Arrow_icon.png?raw=true" />
            </button>}
        </>
    )
}

export default MakeButton;