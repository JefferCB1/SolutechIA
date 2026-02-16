import { type FC, type FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import MagneticButton from '../components/ui/MagneticButton';
import Layout from '../components/Layout';
import ParticleBackground from '../components/ui/ParticleBackground';

const Formulario: FC = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        servicio: '',
        politica: false
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: checked }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Here you would validate and send the data
        console.log("Form Data Submitted:", formData);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
                    <ParticleBackground />
                    <div className="relative z-10 text-center p-8 max-w-lg mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                            <CheckCircle2 size={40} className="text-green-400" />
                        </motion.div>
                        <h2 className="text-3xl font-bold mb-4 text-white">¡Mensaje Enviado!</h2>
                        <p className="text-gray-300 mb-8">
                            Hemos recibido tu solicitud. Nos pondremos en contacto contigo lo antes posible.
                        </p>
                        <Link to="/">
                            <MagneticButton className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-bold transition-all">
                                Volver al Inicio
                            </MagneticButton>
                        </Link>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="min-h-screen text-white flex flex-col items-center justify-center relative overflow-hidden font-header py-12">
                <ParticleBackground />

                <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-2xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden mt-8"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 md:p-10 text-center border-b border-white/5">
                            <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                                Estás a un sólo paso de mejorar tu productividad
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                    y aumentar los beneficios
                                </span>
                            </h1>
                            <p className="text-lg text-gray-300 font-medium tracking-wide uppercase text-xs mt-4">
                                Solicita presupuesto
                            </p>
                        </div>

                        {/* Form */}
                        <div className="p-8 md:p-10">
                            <form onSubmit={handleSubmit} className="space-y-6">

                                <div className="space-y-2">
                                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 ml-1">
                                        Nombre y Apellidos <span className="text-pink-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        required
                                        placeholder="Tu nombre completo"
                                        className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 text-white placeholder-gray-500 transition-all focus:ring-1 focus:ring-primary/50"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 ml-1">
                                        Email <span className="text-pink-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="tu@email.com"
                                        className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 text-white placeholder-gray-500 transition-all focus:ring-1 focus:ring-primary/50"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 ml-1">
                                        Teléfono con WhatsApp <span className="text-pink-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="telefono"
                                        name="telefono"
                                        required
                                        placeholder="+34 600 000 000"
                                        className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 text-white placeholder-gray-500 transition-all focus:ring-1 focus:ring-primary/50"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="servicio" className="block text-sm font-medium text-gray-300 ml-1">
                                        ¿Para quién sería el servicio? <span className="text-pink-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="servicio"
                                        name="servicio"
                                        required
                                        placeholder="Nombre de tu empresa o proyecto"
                                        className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 text-white placeholder-gray-500 transition-all focus:ring-1 focus:ring-primary/50"
                                        value={formData.servicio}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="flex items-start gap-3 pt-2">
                                    <div className="relative flex items-center">
                                        <input
                                            type="checkbox"
                                            id="politica"
                                            name="politica"
                                            required
                                            className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-white/20 bg-black/20 transition-all checked:border-primary checked:bg-primary"
                                            checked={formData.politica}
                                            onChange={handleCheckboxChange}
                                        />
                                        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <label htmlFor="politica" className="text-sm text-gray-400 cursor-pointer select-none">
                                        He leído y acepto la <a href="#" className="text-white hover:underline decoration-primary underline-offset-4">Política de Privacidad</a>
                                    </label>
                                </div>

                                <div className="pt-4">
                                    <MagneticButton
                                        className="w-full group relative bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-xl text-xl font-bold shadow-[0_0_40px_rgba(168,69,123,0.4)] hover:shadow-[0_0_80px_rgba(168,69,123,0.8)] hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-3">
                                            Enviar
                                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        {/* Loading/Fill Effect */}
                                        <div className="absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 ease-out -z-0" />
                                    </MagneticButton>
                                </div>

                            </form>
                        </div>
                    </motion.div>

                    {/* Footer Privacy/Terms subtle links */}
                    <div className="mt-12 text-center text-xs text-gray-600">
                        <p>&copy; 2024 Solutech IA. Todos los derechos reservados.</p>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default Formulario;
