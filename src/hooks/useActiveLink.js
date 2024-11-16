import React, { useEffect, useRef, useState } from "react";

const useActiveLink = (sections) => {
    const [activeSectionIndices, setActiveSectionIndices] = useState([]);
    const sectionRefs = useRef([]);

    sectionRefs.current = sections.map(
        (_, i) => sectionRefs.current[i] ?? React.createRef()
    );

    useEffect(() => {
        const observerOptions = {
            root: null,
            threshold: [0.8],
        };

        const observerCallback = (entries) => {
            setActiveSectionIndices((prevIndices) => {
                let updatedIndices = [...prevIndices];

                entries.forEach((entry) => {
                    const index = sectionRefs.current.findIndex(
                        (ref) => ref.current === entry.target
                    );

                    if (entry.isIntersecting) {
                        // Добавляем индекс, если его еще нет в массиве
                        if (!updatedIndices.includes(index)) {
                            updatedIndices.push(index);
                        }
                    } else {
                        // Удаляем индекс, если секция больше не видна
                        updatedIndices = updatedIndices.filter((i) => i !== index);
                    }
                });

                // Сортируем индексы для последовательности
                updatedIndices.sort((a, b) => a - b);

                return updatedIndices;
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sectionRefs.current.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [sections]);

    return { activeSectionIndices, sectionRefs };
};

export default useActiveLink;
