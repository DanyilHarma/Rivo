import { renderNode } from "../../../../privacyPage/privacyContent/renderNode";
import classes from "./projectArticles.module.scss";


const ProjectArticles = ({ articles }) => {

    return (
        <article>
            {articles.map(article => (
                <section key={article.id} id={article.anchor} className={classes.section}>
                    <h2>{article.title}</h2>
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