const TextNode = ({ node, index, depth }) => {
    const textContent = node.text;

    const applyStyles = (content) => {

        if (node.bold) {
            content = <strong key={`${index}-bold`}>{content}</strong>
        }
        if (node.italic) {
            content = <em key={`${index}-italic`}>{content}</em>
        }
        if (node.underline) {
            content = <u key={`${index}-underline`}>{content}</u>
        }
        if (node.strikethrough) {
            content = <s key={`${index}-strikethrough`}>{content}</s>
        }
        return content;
    };

    return applyStyles(textContent);
};

export default TextNode;