import { NavLink, Outlet } from "react-router-dom";
import BootstrapContainer from "../../general/bootstrapContainer/bootstrapContainer"
import Footer from "../../general/footer/footer"
import classes from "./menuLayout.module.scss"
import logo from "../../../assets/images/header/Rivo_logotype.png"


const MenuLayout = () => {

    return (
        <>
            <BootstrapContainer>
                <div className={classes.menuContainer}>
                    <NavLink to="homepage" className={classes.logo}>
                        <div><img src={logo} alt="" /></div>
                    </NavLink>
                    <Footer isMenuFooter={true} />
                    <Outlet />
                    <NavLink to={"/"} className={classes.closeButton}>CLOSE</NavLink>
                </div>
            </BootstrapContainer>

        </>
    )
}

export default MenuLayout;