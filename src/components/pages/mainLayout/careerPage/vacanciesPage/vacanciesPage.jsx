import { NavLink, useParams } from "react-router-dom";
import { useGetCareerPageDataQuery } from "../../../../../redux/requests/apiSliceVacancies";
import classes from "./vacanciesPage.module.scss"
import BootstrapContainer from "../../../../general/bootstrapContainer/bootstrapContainer";
import { useMemo } from "react";
import VacanciesContent from "./vacanciesContent/vacanciesContent";
import VacanciesImages from "./vacanciesImages/vacanciesImages";
import ContactsContainer from "../../../../general/contactsContainer/contactsContainer";
import { useGetHomepageDataQuery } from "../../../../../redux/requests/apiSlice";

const VacanciesPage = () => {
    const { id } = useParams();

    const { data: careerPageData, error, isLoading } = useGetCareerPageDataQuery();
    const { data: homepageData, error1, isLoading1 } = useGetHomepageDataQuery();
    const vacanciesData = careerPageData?.data?.attributes?.vacancies?.data || [];
    const vacancy = vacanciesData.map(vacancie => vacancie.attributes.vacancies);
    const vacancyId = useMemo(() => {
        return vacancy.find(vacancie => vacancie.id === parseInt(id))
    }, [vacancy, id])

    if (isLoading || isLoading1) return <p>Загрузка...</p>;
    if (error || error1) return <p>Ошибка при загрузке данных!</p>;

    return (
        <BootstrapContainer>
            <NavLink to="/career" className={classes.backToPrev}>Back to career</NavLink>
            <header className={classes.vacancieHeader}>
                <h1 className={`${classes.name} ${vacancyId.HOT ? classes.hot : ""}`}>{vacancyId.name}</h1>
                <NavLink className={classes.apply}>Apply<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1H10M10 1V10M10 1L1.36 10" stroke="#FDDD0A" strokeWidth="1.5" />
                </svg>
                </NavLink>
            </header>
            <VacanciesContent vacancieData={vacancyId} />
            <VacanciesImages vacanciesImages={vacancyId.images} />
            <ContactsContainer contactsData={homepageData?.data?.attributes?.contactsHomepageData} isVacancies={id} />
        </BootstrapContainer>
    )
}

export default VacanciesPage;