import { motion } from 'motion/react';
import { FileText, Mail, Linkedin, MapPin, Calendar, Briefcase, GraduationCap, Award, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">About <span className="text-brand-accent">Prajwal</span></h1>
            <p className="text-xl text-brand-muted leading-relaxed">
              Data-Driven Growth Marketer & Analytics Specialist with 5 years of experience engineering high-performance marketing pipelines for B2B SaaS, Automotive, and E-commerce.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-muted mb-4">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-brand-accent" />
                  <a href="mailto:prajwal@ridegroup.com" className="hover:text-brand-accent transition-colors">prajwal@ridegroup.com</a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Linkedin className="w-4 h-4 text-brand-accent" />
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-brand-accent transition-colors">LinkedIn Profile</a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-brand-accent" />
                  <span>Ottawa, ON / Remote</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-muted mb-4">Core Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["sGTM", "BigQuery", "Looker", "Google Ads", "Meta Ads", "Technical SEO", "Zapier", "Strapi", "Drupal", "Python"].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-gray-50 border border-gray-100 rounded text-[10px] font-bold uppercase text-brand-muted">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-brand-accent" /> Executive Summary
              </h2>
              <div className="prose prose-gray max-w-none text-brand-muted leading-relaxed space-y-4">
                <p>
                  I specialize in bridging the gap between technical data engineering and creative growth strategy. My approach is rooted in the belief that marketing is only as good as the data that feeds it. 
                </p>
                <p>
                  Over the past 5 years, I've focused on building "unbreakable" tracking foundations that bypass modern browser restrictions, allowing for precise attribution and automated scaling. Whether it's leading a regional dealership group to market domination or slashing B2B acquisition costs by 45%, my focus remains on measurable business impact.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-brand-accent" /> Professional Experience
              </h2>
              
              <div className="space-y-12">
                {/* Ride Automotive */}
                <div className="relative pl-8 border-l-2 border-gray-100">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-accent border-4 border-white shadow-sm" />
                  <div className="mb-1 flex justify-between items-start">
                    <h3 className="text-xl font-display font-bold">Ride Automotive Group</h3>
                    <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">2024 - Present</span>
                  </div>
                  <div className="text-brand-accent font-medium mb-4">Digital Marketing Lead</div>
                  <ul className="space-y-2 text-sm text-brand-muted list-disc pl-4">
                    <li>Engineered sGTM/OCT pipelines bypassing ad-blockers, improving data accuracy by 30%.</li>
                    <li>Built BigQuery/Looker BI dashboards reducing CPQL from $52 to $34.</li>
                    <li>Scaled SEM/Social for 63% YoY direct sales increase.</li>
                    <li>Automated lead nurturing recovering 26% of lost sales.</li>
                    <li>Led regional Kia dealerships to #1 and #2 market share positions in March 2026.</li>
                  </ul>
                </div>

                {/* Allseating */}
                <div className="relative pl-8 border-l-2 border-gray-100">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 border-4 border-white shadow-sm" />
                  <div className="mb-1 flex justify-between items-start">
                    <h3 className="text-xl font-display font-bold">Allseating</h3>
                    <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">2023 - 2024</span>
                  </div>
                  <div className="text-brand-accent font-medium mb-4">Growth Marketing Specialist</div>
                  <ul className="space-y-2 text-sm text-brand-muted list-disc pl-4">
                    <li>Managed B2B paid campaigns at $34 CPL (industry avg $62).</li>
                    <li>Led Drupal headless CMS migration boosting organic traffic by 25%.</li>
                    <li>Built internal Strapi portal for streamlined content management.</li>
                    <li>Boosted total site traffic by 41% at a lower CPC.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="pt-8">
              <a 
                href="mailto:prajwal@ridegroup.com"
                className="flex items-center justify-center gap-3 bg-brand-primary text-white p-6 rounded-2xl font-bold hover:bg-brand-accent transition-all group"
              >
                <FileText className="w-6 h-6" /> Download Full Resume (PDF) <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
