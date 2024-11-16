import { useEffect, useMemo, useState } from "react";

const useFilteredProjects = (projects, initialCategory = null) => {
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);

    useEffect(() => {
        setSelectedCategory(initialCategory);
    }, [initialCategory])

    const categories = useMemo(() => {
        const allCategories = projects.flatMap(project =>
            project?.attributes?.expertise?.data.flatMap(expertise =>
                expertise?.attributes?.type
            ) || []
        )
        return [...new Set(allCategories.filter(Boolean))]
    }, [projects])

    const filteredProjects = useMemo(() => {
        if (!selectedCategory) return projects;

        return projects.filter(project =>
            project?.attributes?.expertise?.data[0].attributes.anchor === selectedCategory
        )
    }, [projects, selectedCategory])

    return {
        categories, filteredProjects, selectedCategory, setSelectedCategory
    }
}
export default useFilteredProjects;