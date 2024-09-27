import { useRef } from 'react';
import classes from './hoverText.module.scss';

const HoverText = ({ isFooter = false, children }) => {
    const spanRef = useRef(null);

    const handleMouseMove = (e) => {
        const span = spanRef.current;
        const rect = span.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        span.style.setProperty('--x', `${x}px`);
        span.style.setProperty('--y', `${y}px`);
    };

    const handleMouseLeave = () => {
        const span = spanRef.current;
        span.style.setProperty('--x', `-9999px`);
        span.style.setProperty('--y', `-9999px`);
    };

    return (
        <span
            ref={spanRef}
            className={`${classes.hoverText} ${isFooter ? classes.footerText : ""}`}
            data-text={children}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </span>
    );
};

export default HoverText;