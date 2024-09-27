import { useEffect } from "react"

const useVisibilityObserver = (ref, callback, options) => {

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(([entry]) => {
            callback(entry.isIntersecting)
        },
            {
                rootMargin: "10000px 0px 300px 0px",
                ...options
            })

        observer.observe(ref.current)

        return () => {
            observer.disconnect()
        };
    }, [ref, callback, options])
}

export default useVisibilityObserver;