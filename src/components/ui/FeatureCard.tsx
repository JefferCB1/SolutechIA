import { type FC, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    delay?: number;
}

const FeatureCard: FC<FeatureCardProps> = ({ title, description, icon, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/50 hover:bg-white/10 transition-all duration-500 p-8 h-full flex flex-col justify-between"
        >
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(168,69,123,0.2)]">
                    {icon}
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                    {title.split('\n').map((line, i) => (
                        <span key={i} className="block">{line}</span>
                    ))}
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default FeatureCard;
