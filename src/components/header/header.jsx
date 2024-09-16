import { NavLink } from 'react-router-dom';
import classes from './header.module.scss'
import logo from "../../assets/images/header/Rivo_logotype.png"
import Navigation from './navigation/navigation';


const Header = () => {
    return (
        <header>
            <NavLink to="homepage">
                <div className={classes.logo}><img src={logo} alt="" /></div>
            </NavLink>
            <Navigation />
        </header>
    )
}

export default Header;