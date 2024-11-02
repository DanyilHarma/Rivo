import { useMemo, useState } from "react";

const useFilteredProjects = (projects) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = useMemo(() => {
        const allCategories = projects.flatMap(project =>
            project?.attributes?.expertise?.data.flatMap(expertise =>
                expertise?.attributes?.expertiseData.map(expertiseDataItem =>
                    expertiseDataItem.type
                ) || []
            ) || []
        )
        return [...new Set(allCategories.filter(Boolean))]
    }, [projects])

    const filteredProjects = useMemo(() => {
        if (!selectedCategory) return projects;

        return projects.filter(project =>
            project?.attributes?.expertise?.data.some(expertise =>
                expertise?.attributes?.expertiseData.some(item => item.type === selectedCategory)
            )
        )
    }, [projects, selectedCategory])

    return {
        categories, filteredProjects, selectedCategory, setSelectedCategory
    }
}
export default useFilteredProjects;