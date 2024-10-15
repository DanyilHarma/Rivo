import { useRef } from "react";
import { useGetExpertiseDataQuery, useGetHomepageDataQuery } from "../../../../redux/requests/apiSlice";
import BootstrapContainer from "../../../general/bootstrapContainer/bootstrapContainer";
import ContactsContainer from "../../../general/contactsContainer/contactsContainer";
import Overlay from "../../../general/overlay/overlay";
import Reviews from "../../../general/reviews/reviews";
import AboutPart from "./aboutPart/aboutPart";
import HeaderContent from "./header/headerContent/headerContent";
import IndustryExpertise from "./industryExpertise/industryExpertise";
import ProjectsPart from "./projectsPart/projectsPart";
import ServicesPart from "./servicesPart/servicesPart";
import StackPart from "./stackPart/stackPart";

const Homepage = () => {

    const aboutRef = useRef();
    const { data: categoryData, error1, isLoading1 } = useGetExpertiseDataQuery();
    const { data: homepageData, error, isLoading } = useGetHomepageDataQuery();
    if (isLoading || isLoading1) return <p>Загрузка...</p>;
    if (error || error1) return <p>Ошибка при загрузке данных!</p>;

    return (
        <>
            <Overlay images={homepageData?.data?.attributes?.headerImages} backgroundImages={homepageData?.data?.attributes?.headerBackgroundImages} isMultiply={true}>
                <HeaderContent aboutRef={aboutRef} />
            </Overlay>
            <BootstrapContainer>
                <AboutPart aboutData={homepageData?.data?.attributes?.aboutData} ref={aboutRef} />
                <ServicesPart servicesData={homepageData?.data?.attributes?.servicesData} />
                <IndustryExpertise industryExpertiseData={homepageData?.data?.attributes?.industryExpertise} categories={categoryData?.data} />
                <StackPart stackData={homepageData?.data?.attributes?.stackData} />
                <ProjectsPart projectsData={homepageData?.data?.attributes?.projectsTitle} />
                <Reviews reviewsData={homepageData?.data?.attributes?.reviewsHomepageData} />
                <ContactsContainer contactsData={homepageData?.data?.attributes?.contactsHomepageData} />
            </BootstrapContainer>
        </>
    )
}

export default Homepage;