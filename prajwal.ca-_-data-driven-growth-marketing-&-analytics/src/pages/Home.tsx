import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Target, Zap, Database, ShieldCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const clients = [
  "King Style", "Clip & Chill", "Mishuuu", "Let's Drive Safe", "Karahi Master", 
  "Halton Medix Laser Skincare", "Sterling IBL", "Exaa Decor", "Modinno Tiny Homes", "T Dental Care"
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32 data-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-wider mb-6">
                <Zap className="w-3 h-3" /> Growth Marketing Specialist
              </span>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-brand-primary leading-[1.1] mb-8">
                Data-Driven Growth <br />
                <span className="text-brand-accent">Marketing & Analytics</span>
              </h1>
              <p className="text-xl text-brand-muted leading-relaxed mb-10 max-w-2xl">
                5+ years of scaling B2B SaaS & MarTech through technical precision, sGTM pipelines, and high-performance paid media. I build marketing systems that ad-blockers can't touch.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/portfolio"
                  className="flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-accent transition-all group shadow-xl shadow-brand-primary/10"
                >
                  View Case Studies <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-brand-primary px-8 py-4 rounded-xl font-bold hover:border-brand-accent transition-all"
                >
                  Freelance Consulting
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 bg-brand-accent/5 blur-3xl rounded-full" />
      </section>

      {/* Stats / Trust Bar */}
      <section className="py-12 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years Experience', value: '5+' },
              { label: 'Organic Traffic Boost', value: '116%' },
              { label: 'CPQL Reduction', value: '35%' },
              { label: 'Market Position', value: '#1' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-display font-bold text-brand-primary mb-1">{stat.value}</div>
                <div className="text-sm text-brand-muted font-mono uppercase tracking-tighter">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Roster */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Trusted by Industry Leaders & Growing Brands</h2>
            <p className="text-brand-muted">Delivering performance marketing and data infrastructure for diverse verticals.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 bg-white border border-gray-200 rounded-lg text-sm font-medium text-brand-muted hover:border-brand-accent hover:text-brand-accent transition-all cursor-default shadow-sm"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Pathways */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Recruiters */}
            <div className="p-12 rounded-3xl bg-brand-primary text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-3xl font-display font-bold mb-4">For Hiring Managers</h3>
                <p className="text-gray-400 mb-8 text-lg">
                  Looking for a full-time Growth Lead who can bridge the gap between marketing strategy and technical execution?
                </p>
                <Link to="/about" className="inline-flex items-center gap-2 text-brand-accent font-bold hover:underline">
                  View Executive Summary <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <Target className="w-48 h-48" />
              </div>
            </div>

            {/* Freelance */}
            <div className="p-12 rounded-3xl bg-white border border-gray-200 relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-3xl font-display font-bold mb-4 text-brand-primary">For Business Owners</h3>
                <p className="text-brand-muted mb-8 text-lg">
                  Need to fix your tracking, scale your paid ads, or automate your lead nurturing? Let's build your growth engine.
                </p>
                <Link to="/services" className="inline-flex items-center gap-2 text-brand-accent font-bold hover:underline">
                  Explore Services <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                <Zap className="w-48 h-48" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
