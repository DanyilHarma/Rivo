import Overlay from "../../overlay/overlay";
import HeaderContent from "./headerContent/headerContent";
import classes from "./homepage.module.scss"
import images from "./imagesHeaderHomepage.json"

const Homepage = () => {
    return (
        <>
            <Overlay images={images} isMultiply={true}><HeaderContent /></Overlay>
        </>
    )
}

export default Homepage;