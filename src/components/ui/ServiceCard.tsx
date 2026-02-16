import { type FC } from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    index: number;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, icon, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 overflow-hidden hover:shadow-[0_0_50px_rgba(168,69,123,0.3)] transition-all duration-500"
        >
            {/* Animated Gradient Border Layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none z-0" />

            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

            <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-inner ring-1 ring-white/20">
                    <div className="group-hover:animate-pulse">
                        {icon}
                    </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {title}
                </h3>

                <p className="text-gray-400 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
                    {description}
                </p>

                {/* Learn More link style (visual cue) */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <span>Saber más</span>
                    <span className="text-lg">→</span>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
