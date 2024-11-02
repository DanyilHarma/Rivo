const ImageNode = ({ node, index, depth }) => {
    return (
        <img src={node.image.url} alt="" />
    )
}

export default ImageNode;