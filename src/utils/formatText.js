export const formatText = (text) => {
    return text.toLowerCase().replace(/ & |[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}