import mergeRefs from "../../../../../../../utils/mergeRefs";
import classes from "./projectArticles.module.scss";
import MediaSection from "./mediaSection/mediaSection";
import TextSection from "./textSection/textSection";
import ProjectCarousel from "./projectCarousel/projectCarousel";

const ProjectArticles = ({ articles, sectionRef, sectionRefs }) => {

    const refs = articles.map((_, index) => [
        sectionRefs.current[index],
        index === 1 ? sectionRef : null
    ])

    return (
        <article className={classes.projectArticle}>
            {articles.map((article, index) => {
                const ref = mergeRefs(...refs[index]);
                switch (article.__component) {
                    case "projects-data.text-section":
                        return (
                            <TextSection key={index} id={article.id} anchor={article.anchor} article={article} articleRef={ref} />
                        )
                    case "projects-data.video":
                        return (
                            <MediaSection key={index} media={article} />
                        )
                    case "projects-data.project-carousel":
                        return (
                            <ProjectCarousel key={index} images={article.images} article={article} />
                        )
                }
            })}
        </article>
    )
}

export default ProjectArticles;