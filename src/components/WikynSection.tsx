import { type FC, useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import videoBg from '../assets/video/solutechia.mp4';
import wixynLogo from '../assets/logos/6703c6c646a17a51ffeec659.png';
import { Volume2, VolumeX } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const WikynSection: FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay prevented:", error);
            });
        }
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

                    {/* Left: Video Player */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative group rounded-xl overflow-hidden shadow-2xl border border-white/10"
                    >
                        <div className="aspect-video relative bg-black">
                            <video
                                ref={videoRef}
                                src={videoBg}
                                autoPlay
                                loop
                                muted={isMuted}
                                playsInline
                                className="w-full h-full object-cover opacity-90"
                            />
                            <button
                                onClick={toggleMute}
                                className="absolute bottom-3 right-3 p-1.5 bg-black/60 hover:bg-black/80 rounded-full text-white backdrop-blur-sm transition-colors z-20"
                            >
                                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                            </button>
                            <div className="absolute inset-0 ring-1 ring-white/10 rounded-xl pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Right: Wikyn Logo & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center md:items-start text-center md:text-left"
                    >
                        {/* Logo Container */}
                        <div className="mb-6">
                            <img
                                src={wixynLogo}
                                alt="Wikyn Logo"
                                className="max-w-[200px] md:max-w-[240px] h-auto object-contain"
                            />
                        </div>

                        {/* Styled Tagline */}
                        <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 mb-6 drop-shadow-lg">
                            El CRM más completo.
                        </h3>

                        <a href="/crm" className="inline-block">
                        <MagneticButton className="group relative bg-white/10 backdrop-blur-xl border border-white/20 text-white px-7 py-3 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(168,69,123,0.2)] hover:shadow-[0_0_40px_rgba(168,69,123,0.5)] hover:scale-105 transition-all duration-300 overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                Descubre nuestro CRM
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </span>
                            {/* Loading/Fill Effect */}
                            <div className="absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 ease-out -z-0" />
                        </MagneticButton>
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WikynSection;
