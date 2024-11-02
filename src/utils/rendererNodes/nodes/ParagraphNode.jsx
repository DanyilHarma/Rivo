import { renderNode } from "../renderNode";


const ParagraphNode = ({ node, index, depth }) => {
    return (
        <p>{node.children && node.children.map((child, i) => renderNode(child, i, depth))}</p>
    )
}

export default ParagraphNode;