import { type FC } from 'react';
import Layout from '../components/Layout';
import MagneticButton from '../components/ui/MagneticButton';
import ParallaxSection from '../components/ui/ParallaxSection';
import FeatureSection from '../components/FeatureSection';
import ServiceSection from '../components/ServiceSection';
import WikynSection from '../components/WikynSection';
import ParticleBackground from '../components/ui/ParticleBackground';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Bot, LineChart, Workflow, ArrowRight } from 'lucide-react';
import heroVideo from '../assets/video/solutechia.mp4';
import { Link } from 'react-router-dom';

const HeroContent: FC = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics for mouse movement to avoid "roughness"
    const springX = useSpring(x, { stiffness: 50, damping: 20 });
    const springY = useSpring(y, { stiffness: 50, damping: 20 });

    // Parallax layers - moving at different speeds
    const xTitle = useTransform(springX, [-0.5, 0.5], [-20, 20]);
    const yTitle = useTransform(springY, [-0.5, 0.5], [-20, 20]);

    const xText = useTransform(springX, [-0.5, 0.5], [-10, 10]);
    const yText = useTransform(springY, [-0.5, 0.5], [-10, 10]);

    const xBtn = useTransform(springX, [-0.5, 0.5], [-30, 30]);
    const yBtn = useTransform(springY, [-0.5, 0.5], [-30, 30]);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative z-10 text-center p-4 sm:p-6 md:p-8 max-w-5xl mx-auto cursor-default"
        >
            <motion.div
                style={{ x: xTitle, y: yTitle }}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
            >
                {/* Ambient Glow behind title */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

                <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6 pb-2 leading-tight tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white/80 filter drop-shadow-lg">
                        Automatización
                    </span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-secondary bg-[length:200%_auto] animate-[shine_3s_linear_infinite] filter drop-shadow-[0_0_25px_rgba(168,69,123,0.6)]">
                        Inteligente
                    </span>
                </h1>
            </motion.div>

            <motion.p
                style={{ x: xText, y: yText }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light backdrop-blur-sm"
            >
                Creamos soluciones a medida para <span className="text-white font-semibold">optimizar tus procesos</span>, mejorar tu productividad y <span className="text-white font-semibold">aumentar tus beneficios</span>.
            </motion.p>

            <motion.div
                style={{ x: xBtn, y: yBtn }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <Link to="/formulario">
                    <MagneticButton className="group relative bg-white/10 backdrop-blur-xl border border-white/20 text-white px-12 py-5 rounded-full text-xl font-bold shadow-[0_0_40px_rgba(168,69,123,0.4)] hover:shadow-[0_0_80px_rgba(168,69,123,0.8)] hover:scale-105 transition-all duration-300 overflow-hidden">
                        <span className="relative z-10 flex items-center gap-3">
                            Solicitar Presupuesto
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </span>
                        {/* Loading/Fill Effect */}
                        <div className="absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 ease-out -z-0" />
                    </MagneticButton>
                </Link>
            </motion.div>
        </div>
    );
}

const Home: FC = () => {
    return (
        <Layout>
            <ParticleBackground />

            {/* Hero Section */}
            <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-1000">
                {/* Video Background - Full coverage */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <video
                        src={heroVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-50 mix-blend-overlay"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/40 to-dark" />

                <HeroContent />
            </section>

            {/* Features Section */}
            <FeatureSection />

            {/* Wikyn Section */}
            <WikynSection />

            {/* Services Section */}
            {/* Services Portfolio Section */}
            <ServiceSection id="services" />

            {/* About Section */}
            <ParallaxSection id="about" className="py-24" bgImage="" speed={0.1}>
                <div className="absolute inset-0 bg-primary/10 skew-y-3 transform origin-top-left -z-10" />
                <div className="max-w-7xl mx-auto px-4">
                    <div className="relative">
                        {/* Centered Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center max-w-4xl mx-auto mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 inline-block">
                                Tu Socio en Automatización e IA
                            </h2>
                            <h3 className="text-2xl text-white font-semibold mb-8">
                                Compromiso Personalizado con Resultados Garantizados
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto mb-10">
                                Como líder empresarial, la dirección de tu negocio está en tus manos, pero es un reto estar al tanto de cada detalle. <span className="text-white font-medium">¿Por qué no tener un aliado para tu negocio?</span>
                                <br className="hidden md:block" />
                                Solutech IA actúa como una extensión de tu equipo; siempre en línea, preparados para llevar a cabo tareas y ajustarse perfectamente a tus necesidades.
                            </p>

                            <Link to="/formulario">
                                <button className="px-10 py-4 bg-white text-dark font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300 text-lg">
                                    Solicitar Presupuesto
                                </button>
                            </Link>
                        </motion.div>

                        {/* Innovative Visual Grid (Balanced) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "Extensión de tu Equipo", desc: "Siempre sincronizados contigo", icon: <Workflow size={32} /> },
                                { title: "Disponibilidad 24/7", desc: "Tu negocio nunca se detiene", icon: <Bot size={32} /> },
                                { title: "Resultados Medibles", desc: "Crecimiento real garantizado", icon: <LineChart size={32} /> }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    // Continuous floating animation
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.2 + (i * 0.1),
                                        y: {
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: i * 0.5 // Stagger the floating effect
                                        }
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: "rgba(255,255,255,0.1)",
                                        borderColor: "rgba(168, 85, 247, 0.5)", // Purple border on hover
                                        boxShadow: "0 0 30px rgba(168, 85, 247, 0.2)"
                                    }}
                                    className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center group cursor-pointer relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.2 }}
                                        transition={{ duration: 0.6 }}
                                        className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-white mb-4 relative z-10"
                                    >
                                        {item.icon}
                                    </motion.div>
                                    <h4 className="text-xl font-bold text-white mb-2 relative z-10">{item.title}</h4>
                                    <p className="text-gray-400 text-sm relative z-10">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>


                </div>
            </ParallaxSection>

            {/* Contact Section */}
            <section id="contact" className="py-24 bg-gradient-to-t from-black/80 to-dark relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white inline-block"
                    >
                        ¡Únete a la revolución!
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        La IA está aquí para quedarse y <span className="text-white font-medium">transformará el panorama empresarial</span>.
                        <br className="hidden md:block" />
                        <span className="text-purple-300 font-semibold">Es mejor adelantarse que quedarse atrás.</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-center gap-10"
                    >
                        <p className="text-lg text-white/80 font-medium tracking-wide uppercase text-xs">
                            Solicita una reunión hoy 👇🏻
                        </p>

                        <Link to="/formulario">
                            <MagneticButton className="group relative bg-white/10 backdrop-blur-xl border border-white/20 text-white px-12 py-5 rounded-full text-xl font-bold shadow-[0_0_40px_rgba(168,69,123,0.4)] hover:shadow-[0_0_80px_rgba(168,69,123,0.8)] hover:scale-105 transition-all duration-300 overflow-hidden">
                                <span className="relative z-10 flex items-center gap-3">
                                    Solicitar Presupuesto
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </span>
                                {/* Loading/Fill Effect */}
                                <div className="absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 ease-out -z-0" />
                            </MagneticButton>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
}

export default Home;
