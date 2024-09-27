import { NavLink } from "react-router-dom";
import { useGetHomepageDataQuery } from "../../../redux/apiSlice";
import HoverText from "../../pages/homepage/header/headerContent/hoverText/hoverText";
import classes from "./footer.module.scss";

const Footer = () => {
    const { data: footerData, error, isLoading } = useGetHomepageDataQuery();
    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка при загрузке данных!</p>;

    return (
        <div className={classes.footerContainer}>
            <div className={classes.footerLinks}>
                {footerData?.data?.attributes?.footerData.footerNames.map((name, index) => {
                    return (<NavLink key={index}><HoverText isFooter={true}>{name.name}</HoverText></NavLink>)
                })}
            </div>
            {footerData?.data?.attributes?.footerData.imagesBackground.map((image, index) => {
                return (<img key={index} src={image.imgSrc} style={{ top: image.top, left: image.left, right: image.right, width: image.width, maxWidth: image.maxWidth }} />)
            })}
            <div className={classes.footerPolicy}>
                <span>2020 © Rivo Agency</span>
                <span>Privacy Policy & Term of Use</span>
            </div>
        </div>
    )
}

export default Footer;