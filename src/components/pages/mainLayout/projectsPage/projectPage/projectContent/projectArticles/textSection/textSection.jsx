import { renderNode } from "../../../../../../../../utils/rendererNodes/renderNode";
import classes from "./textSection.module.scss";


const TextSection = ({ id, anchor, article, articleRef }) => {

    return (
        <section key={id} id={anchor} className={`${classes.section} ${!article.title ? classes.image : ""}`}
            ref={articleRef}>
            {article.title && (<h2>{article.title}</h2>)}
            {Array.isArray(article.content)
                ? article.content.map((node, index) => renderNode(node, index))
                : renderNode(article.content)
            }
            {article.stack.length > 1 && (
                <div className={classes.technologiesContainer}>
                    {article?.stack[0]?.stack.map((item, index) => (
                        <span key={index} className={classes.technoligie}>
                            <img src={item.imgSrc} alt={item.name} />
                            <span>{item.name}</span>
                        </span>
                    ))}
                </div>
            )}
        </section>
    )
}

export default TextSection;