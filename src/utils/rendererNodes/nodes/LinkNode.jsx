import { renderNode } from "../renderNode";

const LinkNode = ({ node, index, depth }) => {
    return (
        <a href={node.url} target="_blank">
            {node.children && node.children.map((child, i) => renderNode(child, i, depth))}
        </a>
    )
}

export default LinkNode;