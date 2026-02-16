import { type FC, type ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
    id?: string;
    children: ReactNode;
    className?: string;
    bgImage?: string;
    speed?: number;
}

const ParallaxSection: FC<ParallaxSectionProps> = ({ children, className = '', bgImage, speed = 0.5, id }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={ref} id={id} className={`relative overflow-hidden ${className}`}>
            {bgImage && (
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${bgImage})` }}
                    />
                    <div className="absolute inset-0 bg-dark/60" /> {/* Overlay */}
                </motion.div>
            )}
            <motion.div style={{ opacity }} className="relative z-10 h-full">
                {children}
            </motion.div>
        </section>
    );
};

export default ParallaxSection;
