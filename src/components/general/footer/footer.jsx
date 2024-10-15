import { NavLink, useLocation } from "react-router-dom";
import { useGetFooterImagesDataQuery, useGetHomepageDataQuery } from "../../../redux/requests/apiSlice";
import HoverText from "../../pages/mainLayout/homepage/header/headerContent/hoverText/hoverText";
import classes from "./footer.module.scss";


const Footer = ({ isMenuFooter = false }) => {
    const { data: footerData, error, isLoading } = useGetHomepageDataQuery();
    const { data: footerImagesData, error1, isLoading2 } = useGetFooterImagesDataQuery();

    const location = useLocation();
    const currentPage = location.pathname === "/menu" ? "menu" : "default"
    const privacyPage = location.pathname === "/privacy";


    if (isLoading || isLoading2) return <p>Загрузка...</p>;
    if (error || error1) return <p>Ошибка при загрузке данных!</p>;

    return (
        <div className={`${classes.footerContainer} ${isMenuFooter ? classes.menu : ""} ${privacyPage ? classes.privacyFooter : ""}`}>
            <div className={classes.footerLinks}>
                {footerData?.data?.attributes?.footerData.footerNames.map((name, index) => (
                    <NavLink to={name.link} key={index}>
                        <HoverText isFooter={true}>{name.name}</HoverText>
                        {location.pathname === "/menu" && (name.expertises && (<div className={classes.itemContainer}>{name.expertises.map((item, index) => <span key={index}>{item}</span>)}</div>))}
                    </NavLink>
                ))}
            </div>
            {footerImagesData?.data.map(imagesData => {
                const image = imagesData.attributes;
                const positionData = image.positions.find(pos => pos.name === currentPage) || {};
                return (
                    <img key={imagesData.id} src={image.imgSrc} style={{
                        top: positionData.top,
                        left: positionData.left,
                        right: positionData.right,
                        width: positionData.width,
                        maxWidth: positionData.maxWidth,
                    }} />
                )
            }
            )}
            <div className={classes.footerPolicy}>
                <span>2020 © Rivo Agency</span>
                <NavLink to="/privacy">Privacy Policy & Term of Use</NavLink>
            </div>
        </div>
    );
};

export default Footer;