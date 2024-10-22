import mergeRefs from "../../../../../../../utils/mergeRefs";
import { renderNode } from "../../../../privacyPage/privacyContent/renderNode";
import classes from "./projectArticles.module.scss";

const ProjectArticles = ({ articles, sectionRef, sectionRefs }) => {

    const refs = articles.map((_, index) => [
        sectionRefs.current[index],
        index === 1 ? sectionRef : null
    ])

    return (
        <article className={classes.projectArticle}>
            {articles.map((article, index) => (
                <section key={article.id} id={article.anchor} className={`${classes.section} ${!article.title ? classes.image : ""}`}
                    ref={mergeRefs(...refs[index])}>
                    {article.title && (<h2>{article.title}</h2>)}
                    {Array.isArray(article.content)
                        ? article.content.map((node, index) => renderNode(node, index))
                        : renderNode(article.content)
                    }
                </section>
            ))}
        </article>
    )
}

export default ProjectArticles;