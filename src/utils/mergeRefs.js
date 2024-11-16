function mergeRefs(...refs) {

    return (element) => {
        refs.forEach((ref) => {
            if (ref === null) return;
            if (typeof ref === "function") {
                ref(element);
            } else {
                ref.current = element;
            };
        })
    }
}

export default mergeRefs;