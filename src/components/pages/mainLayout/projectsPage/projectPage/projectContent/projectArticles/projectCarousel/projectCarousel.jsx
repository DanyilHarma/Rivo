import { useEffect, useRef } from "react";
import classes from "./projectCarousel.module.scss";
import { motion, useMotionValue, useTransform, wrap } from "framer-motion";

const ProjectCarousel = ({ images, article }) => {
    const lastScrollY = useRef(0);

    useEffect(() => {
        lastScrollY.current = window.scrollY;
    }, []);


    let imagesTop = [...images, ...images];
    let imagesBottom = [...[...images].reverse(), ...[...images].reverse()];

    const imageWidth = article.isMobile ? 280 :
        450;
    const imageMargin = 20;
    const totalImages = imagesTop.length;
    const totalWidth = totalImages * (imageWidth + imageMargin);

    const xTop = useMotionValue(0);
    const xBottom = useMotionValue(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const deltaY = currentScrollY - lastScrollY.current;
            const speed = 1.5;

            xTop.set(xTop.get() - deltaY * speed);
            xBottom.set(xBottom.get() + deltaY * speed);

            lastScrollY.current = currentScrollY;
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [xTop, xBottom])

    const xTopWrapped = useTransform(xTop, (value) => wrap(-totalWidth / 2, 0, value));
    const xBottomWrapped = useTransform(xBottom, (value) => wrap(-totalWidth / 2, 0, value));

    return (
        <section className={`${classes.section} ${article.isMobile ? classes.isMobileSection : ""}`}>
            <div className={classes.carouselWrapper}>
                <motion.div className={classes.carouselRow} style={{ x: xTopWrapped }}>
                    {imagesTop.map((image, index) => (
                        <div key={`top-${index}`} className={classes.carouselItem} style={{ marginRight: `${article.isMobile ? "40px" : "20px"}` }}>
                            <img src={image} alt="" className={`${classes.image} ${article.isMobile ? classes.isMobile : ""}`} />
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className={classes.carouselWrapper}>
                <motion.div className={classes.carouselRow} style={{ x: xBottomWrapped }}>
                    {imagesBottom.map((image, index) => (
                        <div key={`bottom-${index}`} className={classes.carouselItem} style={{ marginRight: `${article.isMobile ? "40px" : "20px"}` }}>
                            <img src={image} alt="" className={`${classes.image} ${article.isMobile ? classes.isMobile : ""}`} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default ProjectCarousel;