import { Link } from 'react-router-dom';
import { Mail, Linkedin, Globe, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <span className="font-display font-bold text-2xl tracking-tight">prajwal<span className="text-brand-accent">.ca</span></span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-8">
              Data-Driven Growth Marketer & Analytics Specialist. 
              Engineering high-performance marketing pipelines that scale.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:prajwal@ridegroup.com" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About & Resume</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-2">sGTM & Analytics <ArrowUpRight className="w-3 h-3" /></li>
              <li className="flex items-center gap-2">Performance Marketing <ArrowUpRight className="w-3 h-3" /></li>
              <li className="flex items-center gap-2">Technical SEO <ArrowUpRight className="w-3 h-3" /></li>
              <li className="flex items-center gap-2">MarTech Automation <ArrowUpRight className="w-3 h-3" /></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Prajwal Ayyanahalli Math. All rights reserved.</p>
          <p>Built with precision & data.</p>
        </div>
      </div>
    </footer>
  );
}
