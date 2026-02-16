import { type FC } from 'react';
import FeatureCard from './ui/FeatureCard';
import { Zap, Settings, TrendingUp } from 'lucide-react';

const FeatureSection: FC = () => {
    const features = [
        {
            title: "Potencia tu\nproductividad",
            description: "Integra tu CRM, automatiza flujos de trabajo y optimiza procesos: Nuestras soluciones están diseñadas para impulsar sin interrupciones la productividad de tu negocio.",
            icon: <Zap size={32} />,
            delay: 0.2
        },
        {
            title: "Soluciones\nPersonalizadas",
            description: "Entendemos que cada negocio es único. Por eso, nos especializamos en diseñar sistemas de automatización adaptados a tus necesidades específicas, garantizando que la inteligencia artificial se alinee perfectamente con tus objetivos empresariales.",
            icon: <Settings size={32} />,
            delay: 0.4
        },
        {
            title: "Eficiencia y\nEscalabilidad",
            description: "Nuestras soluciones no solo buscan mejorar tus operaciones actuales, sino también prepararte para el futuro. Gracias a la escalabilidad de nuestras automatizaciones, tu negocio podrá crecer y adaptarse a nuevos desafíos con facilidad.",
            icon: <TrendingUp size={32} />,
            delay: 0.6
        }
    ];

    return (
        <section className="py-24 relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                            delay={feature.delay}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
