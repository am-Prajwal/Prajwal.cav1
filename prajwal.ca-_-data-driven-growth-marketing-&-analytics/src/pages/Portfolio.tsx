import { motion } from 'motion/react';
import { ExternalLink, CheckCircle2, TrendingUp, BarChart, Zap, Globe } from 'lucide-react';

const corporateCases = [
  {
    company: "Ride Automotive Group",
    role: "Digital Marketing Lead",
    period: "Oct 2024 - Present",
    problem: "Fragmented tracking, high CPQL, and reliance on standard ad-platform tracking vulnerable to ad-blockers.",
    solution: "Engineered server-side GTM (sGTM) and Offline Conversion Tracking (OCT) pipelines. Built custom BI dashboards using BigQuery and Looker.",
    results: [
      "Reduced CPQL from $52 to $34 (35% improvement).",
      "Led Kia 417 and Orleans Kia to #1 and #2 regional market share (March 2026).",
      "Achieved 63% YoY direct sales increase via scaled SEM/Social.",
      "Recovered 26% of lost sales through automated lead nurturing.",
      "Boosted organic traffic by 116% and improved page load by 50%."
    ],
    tags: ["sGTM", "BigQuery", "Looker", "SEM", "Automation"]
  },
  {
    company: "Allseating",
    role: "Growth Marketing Specialist",
    period: "May 2023 - Oct 2024",
    problem: "High B2B customer acquisition costs and outdated CMS infrastructure limiting organic growth.",
    solution: "Led migration to a headless Drupal CMS and built an internal Strapi portal. Optimized B2B paid campaigns for high-intent lead capture.",
    results: [
      "Achieved $34 CPL for B2B campaigns (vs. $62 industry average).",
      "Boosted organic traffic by 25% post-migration.",
      "Increased total site traffic by 41% while lowering average CPC.",
      "Streamlined internal workflows with custom Strapi portal."
    ],
    tags: ["Drupal", "Strapi", "B2B Paid Media", "Technical SEO"]
  }
];

const freelanceServices = [
  {
    category: "Lead Automation & CRM",
    clients: ["Halton Medix Laser Skincare", "T Dental Care", "Sterling IBL"],
    blurb: "Implementing automated nurturing sequences and CRM integrations to maximize lead-to-sale conversion rates."
  },
  {
    category: "E-commerce Growth & Performance",
    clients: ["King Style", "Mishuuu", "Exaa Decor"],
    blurb: "Scaling direct-to-consumer sales through data-backed performance marketing and conversion rate optimization."
  },
  {
    category: "Technical Infrastructure & sGTM",
    clients: ["Modinno Tiny Homes", "Let's Drive Safe", "Karahi Master"],
    blurb: "Building robust tracking foundations that bypass browser restrictions and provide 100% data accuracy."
  }
];

export default function Portfolio() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">Case Studies & <br /><span className="text-brand-accent">Performance History</span></h1>
          <p className="text-xl text-brand-muted max-w-3xl">
            A selection of projects where technical analytics and growth strategy intersected to drive measurable business outcomes.
          </p>
        </header>

        {/* Corporate Experience */}
        <div className="space-y-20 mb-32">
          <h2 className="text-2xl font-mono uppercase tracking-widest text-brand-accent border-b border-brand-accent/20 pb-4">Corporate Experience</h2>
          
          {corporateCases.map((work, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              <div className="lg:col-span-5">
                <div className="sticky top-24">
                  <div className="text-sm font-mono text-brand-accent mb-2">{work.period}</div>
                  <h3 className="text-4xl font-display font-bold mb-2">{work.company}</h3>
                  <div className="text-lg font-medium text-brand-muted mb-6">{work.role}</div>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {work.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-brand-muted text-xs font-bold rounded-md">{tag}</span>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-brand-primary mb-2 flex items-center gap-2">
                        <BarChart className="w-4 h-4 text-brand-accent" /> The Challenge
                      </h4>
                      <p className="text-brand-muted leading-relaxed">{work.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-brand-primary mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-brand-accent" /> The Solution
                      </h4>
                      <p className="text-brand-muted leading-relaxed">{work.solution}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-sm">
                <h4 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-brand-accent" /> Key Results & Wins
                </h4>
                <ul className="space-y-6">
                  {work.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" />
                      <span className="text-lg text-brand-primary leading-tight font-medium">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Freelance Projects */}
        <div className="space-y-12">
          <h2 className="text-2xl font-mono uppercase tracking-widest text-brand-accent border-b border-brand-accent/20 pb-4">Freelance & Consulting</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {freelanceServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:border-brand-accent transition-colors group"
              >
                <h3 className="text-xl font-display font-bold mb-4 group-hover:text-brand-accent transition-colors">{service.category}</h3>
                <p className="text-brand-muted mb-6 text-sm leading-relaxed">{service.blurb}</p>
                <div className="flex flex-wrap gap-2">
                  {service.clients.map(client => (
                    <span key={client} className="text-[10px] font-bold uppercase tracking-wider bg-white border border-gray-200 px-2 py-1 rounded text-brand-muted">
                      {client}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
