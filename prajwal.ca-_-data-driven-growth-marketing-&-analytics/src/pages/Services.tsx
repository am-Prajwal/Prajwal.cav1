import { motion } from 'motion/react';
import { Database, Target, Search, Cpu, Check, ArrowRight, Mail } from 'lucide-react';

const services = [
  {
    title: "sGTM & Analytics Engineering",
    icon: Database,
    description: "Future-proof your data. I implement server-side GTM and Offline Conversion Tracking (OCT) to bypass ad-blockers and iOS restrictions, ensuring 100% data accuracy for your ad platforms.",
    features: [
      "Server-side GTM Implementation",
      "Offline Conversion Tracking (OCT)",
      "BigQuery Data Warehousing",
      "Looker Studio / BI Dashboards",
      "Custom Event Mapping"
    ]
  },
  {
    title: "Performance Marketing",
    icon: Target,
    description: "Data-backed scaling. I manage high-intent SEM and Social campaigns focused on ROI, not just vanity metrics. Specialized in B2B SaaS and Automotive lead generation.",
    features: [
      "Google Ads (Search, Display, PMax)",
      "Meta Ads (Facebook & Instagram)",
      "LinkedIn Ads for B2B",
      "Retargeting Strategy",
      "A/B Creative Testing"
    ]
  },
  {
    title: "Technical SEO & CMS",
    icon: Search,
    description: "Search visibility built on solid code. From headless CMS migrations to core web vitals optimization, I ensure your site is engineered to rank and convert.",
    features: [
      "Headless CMS Migration (Drupal/Strapi)",
      "Core Web Vitals Optimization",
      "Semantic Schema Markup",
      "Content Strategy & Gap Analysis",
      "Local SEO Dominance"
    ]
  },
  {
    title: "MarTech & Lead Automation",
    icon: Cpu,
    description: "Automate the grunt work. I build lead nurturing pipelines that recover lost sales and streamline your sales funnel using modern automation tools.",
    features: [
      "CRM Integration & Optimization",
      "Automated Email/SMS Nurturing",
      "Lead Scoring Systems",
      "Workflow Automation (Zapier/Make)",
      "Sales Funnel Engineering"
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">Growth Engineering <br /><span className="text-brand-accent">Services</span></h1>
            <p className="text-xl text-brand-muted max-w-2xl mx-auto">
              Custom-built marketing infrastructure and performance strategies designed for businesses that demand data accuracy and ROI.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-xl hover:border-brand-accent transition-all group"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-accent transition-colors">
                <service.icon className="w-7 h-7 text-brand-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-brand-muted mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-brand-primary">
                    <Check className="w-4 h-4 text-brand-accent" /> {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <section className="bg-brand-primary rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-8">Ready to scale your <br />growth engine?</h2>
            <p className="text-gray-400 text-lg mb-10">
              Whether you need a full audit of your tracking setup or a managed performance campaign, I'm here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:prajwal@ridegroup.com" 
                className="bg-brand-accent text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" /> Email Me
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                LinkedIn <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Decorative background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-accent blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400 blur-[120px] rounded-full" />
          </div>
        </section>
      </div>
    </div>
  );
}
