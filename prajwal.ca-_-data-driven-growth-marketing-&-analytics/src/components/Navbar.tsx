import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Menu, X, BarChart3 } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center group-hover:bg-brand-accent transition-colors">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">prajwal<span className="text-brand-accent">.ca</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-accent",
                  location.pathname === item.path ? "text-brand-accent" : "text-brand-muted"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/services"
              className="bg-brand-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-accent transition-all hover:shadow-lg active:scale-95"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-primary hover:bg-gray-100 rounded-md transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-b border-gray-200 absolute top-16 left-0 right-0 p-4 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-medium p-2 rounded-md transition-colors",
                location.pathname === item.path ? "bg-gray-100 text-brand-accent" : "text-brand-muted"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="bg-brand-primary text-white px-5 py-3 rounded-xl text-center font-medium"
          >
            Book a Consultation
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
