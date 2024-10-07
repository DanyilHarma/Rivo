import { useGetHomepageDataQuery } from "../../../../redux/requests/apiSlice";
import { useGetCareerPageDataQuery } from "../../../../redux/requests/apiSliceVacancies";
import BootstrapContainer from "../../../general/bootstrapContainer/bootstrapContainer";
import ContactsContainer from "../../../general/contactsContainer/contactsContainer";
import TitleComponent from "../../../general/titleComponent/titleComponent";
import classes from "./careerPage.module.scss"
import Vacancies from "./vacancies/vacancies";

const CareerPage = () => {
    const { data: careerPageData, error, isLoading } = useGetCareerPageDataQuery();
    const { data: homepageData, error1, isLoading1 } = useGetHomepageDataQuery();
    const vacanciesData = careerPageData?.data?.attributes?.vacancies?.data || []
    if (isLoading || isLoading1) return <p>Загрузка...</p>;
    if (error || error1) return <p>Ошибка при загрузке данных!</p>;

    return (
        <BootstrapContainer>
            <div className={classes.careerTitlesContainer}>
                <TitleComponent titleData={careerPageData?.data?.attributes?.title.bigTitles} />
                <div className={classes.interestedContainer}>
                    <h3>{careerPageData?.data?.attributes.interested}</h3>
                    <p>{careerPageData?.data?.attributes.interestedText}</p>
                </div>
            </div>
            <div className={classes.vacanciesContainer}>
                <h4>Current vacancies</h4>
                {vacanciesData.map(vacancie => (<Vacancies key={vacancie.id} vacancieData={vacancie.attributes.vacancies} />))}
                {careerPageData?.data?.attributes.backgroundImages.map((image, index) => (
                    <img key={index} src={image.imgSrc} style={{ top: image.top, left: image.left, right: image.right }} />
                ))}
            </div>
            <ContactsContainer contactsData={homepageData?.data?.attributes?.contactsHomepageData} />
        </BootstrapContainer>
    )
}

export default CareerPage;