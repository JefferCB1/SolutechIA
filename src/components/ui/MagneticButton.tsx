import { type FC, type ReactNode, useRef, useState } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    className?: string;

}

const MagneticButton: FC<MagneticButtonProps> = ({ children, className = '', ...props }) => {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: x * 0.3, y: y * 0.3 }} // Adjust strength of magnet
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            className={`relative overflow-hidden group ${className}`}
            {...props}
        >
            <span className="relative z-10">{children}</span>
            <div className="absolute inset-0 -z-10 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-full" />
        </motion.button>
    );
};

export default MagneticButton;
