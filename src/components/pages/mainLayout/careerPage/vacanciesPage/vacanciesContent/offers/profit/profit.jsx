import classes from "./profit.module.scss"
import DOMPurify from "dompurify"

const Profit = ({ profit }) => {

    const paragraphs = profit
        ?.filter(item => item.type === "paragraph")
        ?.flatMap(item => item.children)
        ?.filter(child => child.type === "text")
        ?.map(child => child.text) || [];

    return (
        <div className={classes.profit}>
            <h3>Profit</h3>
            {paragraphs.map((paragraph, index) => (
                <p dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(paragraph) }} key={index}></p>
            ))}
        </div>
    )
}

export default Profit;