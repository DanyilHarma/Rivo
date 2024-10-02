import { NavLink, useLocation } from 'react-router-dom';
import classes from './header.module.scss'
import logo from "../../assets/images/header/Rivo_logotype.png"
import Navigation from './navigation/navigation';


const Header = () => {
    const location = useLocation()
    const menuPage = location.pathname === "/menu";
    const homepage = location.pathname === "/homepage"
    return (
        <>
            {!menuPage && (<header>
                <NavLink to="homepage">
                    <div className={`${classes.logo} ${homepage ? classes.homepageLogo : ""}`}><img src={logo} alt="" /></div>
                </NavLink>
                <Navigation />
            </header>)}
        </>
    )
}

export default Header;