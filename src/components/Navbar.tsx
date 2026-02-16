import { type FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/Logo_solutechIA.jpg';

const Navbar: FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Servicios', href: '/#services' },
        { name: 'Nosotros', href: '/#about' },
        { name: 'Contacto', href: '/#contact' },
    ];

    return (
        <motion.nav
            layout
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.4)", borderColor: "rgba(255,255,255,0.2)" }}
            className={`fixed left-1/2 -translate-x-1/2 z-50 rounded-full transition-all duration-500 ease-out border ${isScrolled
                ? 'top-4 w-[90%] md:w-[70%] max-w-4xl bg-[#371764]/80 backdrop-blur-2xl border-white/10 shadow-2xl'
                : 'top-8 w-[95%] md:w-[85%] max-w-6xl bg-[#371764]/40 backdrop-blur-xl border-white/5 shadow-lg'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <img src={logo} alt="Solutech IA" className="h-10 w-auto rounded-full" />
                            <span className="text-xl font-bold text-white tracking-wide">Solutech IA</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-white hover:text-primary transition-colors duration-200 text-sm font-medium tracking-wide"
                            >
                                {link.name}
                            </a>
                        ))}
    <a
        href="/#contact"
        className="bg-primary hover:bg-secondary text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-primary/50"
    >
        Cotizar
    </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-3 py-3 text-base font-medium text-white hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                <a
                    href="/#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block mt-4 text-center bg-primary hover:bg-secondary text-white px-5 py-3 rounded-lg text-base font-medium transition-colors"
                >
                    Cotizar Ahora
                </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
