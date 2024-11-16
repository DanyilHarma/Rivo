import { renderNode } from "../renderNode";

const HeadingNode = ({ node, index, depth }) => {
    const HeadingTag = `h${node.level || 2}`;
    return (
        <HeadingTag>
            {node.children &&
                node.children.map((child, i) => renderNode(child, `${index}-${i}`, depth))}
        </HeadingTag>
    );
}

export default HeadingNode;