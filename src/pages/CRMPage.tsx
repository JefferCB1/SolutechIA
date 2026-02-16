import { type FC } from 'react';
import { motion } from 'framer-motion';
import { useMotionValue, useTransform, useSpring } from 'framer-motion';
import ParticleBackground from '../components/ui/ParticleBackground';
import Navbar from '../components/Navbar';
import { 
  MessageCircle, 
  Workflow, 
  BarChart3, 
  Users, 
  Zap, 
  Shield, 
  Check,
  ArrowRight
} from 'lucide-react';

const CRMBenefits: FC = () => {
  const benefits = [
    {
      icon: <Workflow size={32} />,
      title: 'Automatización de Procesos',
      description: 'Crea flujos de trabajo automatizados que se ejecutan sin intervención manual, ahorrando tiempo y reduciendo errores.'
    },
    {
      icon: <MessageCircle size={32} />,
      title: 'WhatsApp Business Integrado',
      description: 'Gestiona todas tus conversaciones de WhatsApp directamente desde el CRM. Respuestas automáticas y chatbot.'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Análisis Predictivo',
      description: 'Obtén insights avanzados con IA. Predice tendencias de ventas y comportamiento de clientes.'
    },
    {
      icon: <Users size={32} />,
      title: 'Gestión de Leads',
      description: 'Tracking completo del embudo de ventas. Desde el primer contacto hasta el cierre.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Integraciones Potentes',
      description: 'Conecta con más de 200 aplicaciones. Zapier, Google Workspace, Slack y mucho más.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Seguridad Avanzada',
      description: 'Tus datos protegidos con encriptación de nivel bancario y cumplimiento GDPR.'
    }
  ];

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
            Potencia tu Negocio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Wixyn es el CRM más completo basado en Go High Level, potenciado con IA para llevar tu gestión al siguiente nivel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingSection: FC = () => {
  const plans = [
    {
      name: 'Wixyn Starter',
      price: '97',
      period: '/mes',
      description: 'Perfecto para pequeños negocios',
      features: [
        'Todas las funcionalidades CRM',
        'Acceso API',
        'Paneles ilimitados',
        'App WhatsApp Meta',
        'App WhatsApp Business',
        'Mailgun preconfigurado',
        'Onboarding guiado',
        'Gestor de proyectos',
        'Team Chat',
        'Soporte 100% en español'
      ],
      popular: false,
      gradient: 'from-gray-800 to-gray-900'
    },
    {
      name: 'Wixyn Todo En Uno',
      price: '96,7',
      period: '/mes + IVA',
      description: 'El plan más completo al mejor precio',
      features: [
        'Todo del plan Starter',
        'IA Avanzada incluida',
        'Automatizaciones premium',
        'Chatbots ilimitados',
        'Análisis predictivo',
        'CRM personalizado',
        'Integraciones exclusivas',
        'Gestor de cuenta dedicado',
        'Formación incluida',
        'Soporte prioritario 24/7'
      ],
      popular: true,
      gradient: 'from-primary to-secondary'
    },
    {
      name: 'Wixyn Unlimited',
      price: '297',
      period: '/mes',
      description: 'Para equipos que necesitan escalar',
      features: [
        'Todo del plan Starter',
        'Usuarios ilimitados',
        'White label completo',
        'API avanzada',
        'Webhooks personalizados',
        'SLA garantizado',
        'Account Manager',
        'Formación avanzada',
        'Migración gratuita',
        'Soporte 24/7 premium'
      ],
      popular: false,
      gradient: 'from-purple-900 to-pink-900'
    }
  ];

  return (
    <section className="py-24 bg-dark relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
            Planes Flexibles
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tu negocio. Sin compromisos, cancela cuando quieras.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ${
                plan.popular 
                  ? 'ring-2 ring-primary shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105' 
                  : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-black/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary py-2 text-center text-sm font-semibold text-white">
                  Más Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-bold text-white">€{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-gray-300">
                      <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="https://solutechia.es/wixyn-base"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 rounded-xl font-bold text-lg text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/50 hover:scale-105'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:scale-105'
                  }`}
                >
                  Pruébalo gratis 14 días
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection: FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-dark to-primary/20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Únete a más de 500 empresas que ya están usando Wixyn para grow their business con IA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://solutechia.es/wixyn-base"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all"
            >
              <span className="flex items-center gap-2">
                Empezar Ahora
                <ArrowRight size={20} />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CRMPage: FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 50, damping: 20 });
  const springY = useSpring(y, { stiffness: 50, damping: 20 });

  const xTitle = useTransform(springX, [-0.5, 0.5], [-15, 15]);
  const yTitle = useTransform(springY, [-0.5, 0.5], [-15, 15]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = (event.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <ParticleBackground />
      
      {/* Hero Section */}
      <section 
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-dark/50 to-dark" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ x: xTitle, y: yTitle }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px]"
          />
          <motion.div
            style={{ x: xTitle, y: yTitle }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px]"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-6 py-3 rounded-full bg-primary/20 border border-primary/30 text-primary font-semibold mb-8">
              ✨ Basado en Go High Level
            </span>
          </motion.div>

          <motion.h1
            style={{ x: xTitle, y: yTitle }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white/80">
              Descubre
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-secondary">
              Wixyn CRM
            </span>
          </motion.h1>

          <motion.p
            style={{ x: useTransform(springX, [-0.5, 0.5], [-8, 8]), y: useTransform(springY, [-0.5, 0.5], [-8, 8]) }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-10 max-w-2xl md:max-w-3xl mx-auto"
          >
            El CRM más completo con{' '}
            <span className="text-white font-semibold">Inteligencia Artificial</span> integrada.
            Automatiza, gestiona y escala tu negocio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <a 
              href="#planes"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex bg-gradient-to-r from-primary to-secondary text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full font-bold text-sm sm:text-lg shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all cursor-pointer"
            >
              <span className="flex items-center gap-2">
                Ver Planes
                <ArrowRight size={18} className="sm:w-20" />
              </span>
            </a>
            
            <a 
              href="#features" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 sm:px-10 py-3 sm:py-5 rounded-full font-bold text-sm sm:text-lg text-white border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Conocer Más
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Empresas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Automatizaciones</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Soporte</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <div id="features">
        <CRMBenefits />
      </div>

      {/* Wixyn Todo En Uno - Herramientas */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
              Todo En Uno
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Todas las herramientas que necesitas para gestionar tu negocio en una sola plataforma.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'CRM', icon: '📊' },
              { name: 'Email Marketing', icon: '📧' },
              { name: 'SMS Marketing', icon: '💬' },
              { name: 'WhatsApp', icon: '📱' },
              { name: 'Calendario', icon: '📅' },
              { name: 'Gestor de Proyectos', icon: '✅' },
              { name: 'Team Chat', icon: '💻' },
              { name: 'Forms', icon: '📝' },
              { name: 'Landing Pages', icon: '🌐' },
              { name: 'Funnels', icon: '🔄' },
              { name: 'Blog', icon: '📰' },
              { name: 'Membership', icon: '🎓' },
              { name: 'Webhooks', icon: '🔗' },
              { name: 'API Access', icon: '⚡' },
              { name: 'App Marketplace', icon: '🧩' },
              { name: 'AI Assistant', icon: '🤖' },
              { name: 'Pipeline', icon: '📈' },
              { name: 'Pipeline Deals', icon: '💰' },
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="text-3xl mb-2">{tool.icon}</div>
                <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{tool.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <div id="planes">
        <PricingSection />
      </div>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default CRMPage;
