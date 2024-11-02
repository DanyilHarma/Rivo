import classes from "../../../components/pages/mainLayout/privacyPage/privacyPage.module.scss"
import { renderNode } from "../renderNode";

const ListNode = ({ node, index, depth }) => {
    const ListTag = node.format === "ordered" ? "ol" : "ul";
    return (
        <ListTag className={`${classes.list} ${classes[`depth${depth}`]} ${classes[node.format]}`}>
            {node.children && node.children.map((child, i) => renderNode(child, i, depth + 1))}
        </ListTag>
    )
}

export default ListNode;