import { type FC } from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/logos/Logo_solutechIA.jpg';

const Footer: FC = () => {
    return (
        <footer className="bg-dark border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <img src={logo} alt="Solutech IA" className="h-10 w-auto rounded-full" />
                            <span className="text-xl font-bold text-white">Solutech IA</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Transformamos negocios a través de la automatización inteligente y la inteligencia artificial.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Enlaces Rápidos</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#services" className="hover:text-primary transition-colors">Servicios</a></li>
                            <li><a href="#projects" className="hover:text-primary transition-colors">Proyectos</a></li>
                            <li><a href="#about" className="hover:text-primary transition-colors">Nosotros</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Servicios</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-primary transition-colors">Automatización de Flujos</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Chatbots con IA</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Análisis de Datos</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">CRM Inteligente</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contacto</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary mt-0.5" />
                                <span>Madrid, España</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-primary" />
                                <a href="mailto:info@solutechia.es" className="hover:text-white transition-colors">info@solutechia.es</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-primary" />
                                <a href="tel:+34600000000" className="hover:text-white transition-colors">+34 600 000 000</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-xs">
                    <p>&copy; {new Date().getFullYear()} Solutech IA. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
