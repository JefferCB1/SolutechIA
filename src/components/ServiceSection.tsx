import { type FC } from 'react';
import CardSwap, { Card } from './CardSwap';
import { Bot, MessageSquare, Calendar, Star, Mail, Instagram, GraduationCap, Clock, ShieldCheck, Layers } from 'lucide-react';

const services = [
    { title: "Chatbots Lead Gen", desc: "Generación automática de clientes potenciales 24/7.", icon: <Bot size={40} className="text-blue-400" />, gradient: "from-blue-900/40 via-blue-800/20 to-purple-900/40" },
    { title: "Servicio al Cliente", desc: "Atención inmediata y personalizada para tus usuarios.", icon: <MessageSquare size={40} className="text-purple-400" />, gradient: "from-purple-900/40 via-pink-800/20 to-indigo-900/40" },
    { title: "Reservas Automáticas", desc: "Gestiona citas y reservas sin intervención manual.", icon: <Calendar size={40} className="text-pink-400" />, gradient: "from-pink-900/40 via-rose-800/20 to-red-900/40" },
    { title: "Gestión de Satisfacción", desc: "Evalúa y mejora la experiencia de tus clientes.", icon: <Star size={40} className="text-yellow-400" />, gradient: "from-yellow-900/40 via-amber-800/20 to-orange-900/40" },
    { title: "Integración Omnicanal", desc: "Conecta Email, WhatsApp y más en un solo lugar.", icon: <Mail size={40} className="text-green-400" />, gradient: "from-green-900/40 via-emerald-800/20 to-teal-900/40" },
    { title: "Automatización Instagram", desc: "Respuestas rápidas a DMs y comentarios.", icon: <Instagram size={40} className="text-pink-600" />, gradient: "from-pink-900/40 via-rose-800/20 to-purple-900/40" },
    { title: "Capacitación IA", desc: "Recursos y entrenamiento a través de chatbots.", icon: <GraduationCap size={40} className="text-orange-400" />, gradient: "from-orange-900/40 via-amber-800/20 to-yellow-900/40" },
    { title: "Recordatorios Inteligentes", desc: "Seguimiento automático para reducir ausencias.", icon: <Clock size={40} className="text-cyan-400" />, gradient: "from-cyan-900/40 via-sky-800/20 to-blue-900/40" },
    { title: "Auditorías de IA", desc: "Análisis experto para optimizar tus procesos.", icon: <ShieldCheck size={40} className="text-red-400" />, gradient: "from-red-900/40 via-rose-800/20 to-pink-900/40" },
    { title: "Plataformas a Medida", desc: "Soluciones personalizadas para tu negocio.", icon: <Layers size={40} className="text-indigo-400" />, gradient: "from-indigo-900/40 via-violet-800/20 to-purple-900/40" },
];

interface ServiceSectionProps {
    id?: string;
}

const ServiceSection: FC<ServiceSectionProps> = ({ id }) => {
    return (
        <section id={id} className="py-24 relative overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 w-full h-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="text-left">
                    <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                            Nuestro Portafolio
                        </span>
                        <br />
                        <span className="text-white">de Servicios</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-lg mb-12 leading-relaxed">
                        Explora nuestra gama de soluciones automatizadas diseñadas para escalar tu negocio, mejorar la eficiencia y deleitar a tus clientes.
                    </p>

                    <div className="hidden lg:block">
                        <div className="flex gap-4">
                            <div className="h-2 w-20 bg-primary rounded-full"></div>
                            <div className="h-2 w-10 bg-secondary/50 rounded-full"></div>
                            <div className="h-2 w-5 bg-white/20 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Right Content: Card Swap Animation */}
                <div className="h-[500px] md:h-[600px] w-full relative flex items-center justify-center">
                    <CardSwap
                        cardDistance={50}
                        verticalDistance={60}
                        delay={1000}
                        pauseOnHover={true}
                        width={320}
                        height={400}
                        skewAmount={3}
                    >
                        {services.map((service, index) => (
                            <Card key={index} className={`flex flex-col items-center justify-center p-8 text-center border-t border-l border-white/20 bg-gradient-to-br ${service.gradient} backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)]`}>
                                <div className="mb-6 p-6 rounded-full bg-white/5 shadow-inner ring-1 ring-white/10">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-gray-300 font-medium leading-relaxed">{service.desc}</p>

                                <div className="absolute bottom-6 w-full px-8 flex justify-between text-xs text-gray-500 uppercase tracking-widest">
                                    <span>Solutech IA</span>
                                    <span>0{index + 1}</span>
                                </div>
                            </Card>
                        ))}
                    </CardSwap>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
