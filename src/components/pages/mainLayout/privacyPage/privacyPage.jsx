import { NavLink } from "react-router-dom";
import BootstrapContainer from "../../../general/bootstrapContainer/bootstrapContainer";
import classes from "./privacyPage.module.scss"
import { useGetPolicyDataQuery } from "../../../../redux/requests/apiSlicePolicy";
import PrivacyContent from "./privacyContent/privacyContent";


const PrivacyPage = () => {
    const { data: privacyData, error, isLoading } = useGetPolicyDataQuery();

    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка при загрузке данных!</p>;

    return (
        <BootstrapContainer>
            <NavLink to="/homepage" className={classes.backToPrev}>Back to home page</NavLink>
            <div className={classes.privacyContainer}>
                {privacyData?.data?.map((paper, index) => (
                    <div key={paper.attributes.slug}>
                        <h1>{paper.attributes.title}</h1>
                        <div key={index} className={classes.sectionContainer}>
                            {paper.attributes?.privacySections?.sections.map(section => (
                                <>
                                    <PrivacyContent content={section} />
                                </>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </BootstrapContainer>
    )
}

export default PrivacyPage;