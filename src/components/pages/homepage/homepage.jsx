import { useGetHomepageDataQuery } from "../../../redux/apiSlice";
import BootstrapContainer from "../../general/bootstrapContainer/bootstrapContainer";
import Overlay from "../../general/overlay/overlay";
import AboutPart from "./aboutPart/aboutPart";
import HeaderContent from "./header/headerContent/headerContent";
import ServicesPart from "./servicesPart/servicesPart";

const Homepage = () => {

    const { data: homepageData, error, isLoading } = useGetHomepageDataQuery();
    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка при загрузке данных!</p>;

    return (
        <>
            <Overlay images={homepageData?.data?.attributes?.headerImages} backgroundImages={homepageData?.data?.attributes?.headerBackgroundImages} isMultiply={true}>
                <HeaderContent />
            </Overlay>
            <BootstrapContainer>
                <AboutPart aboutData={homepageData?.data?.attributes?.aboutData} />
            </BootstrapContainer>
            <BootstrapContainer>
                <ServicesPart servicesData={homepageData?.data?.attributes?.servicesData} />
            </BootstrapContainer>

        </>
    )
}

export default Homepage;