import React, { useState, useEffect } from 'react';
import { PRODUCT, CHECKOUT_URL } from '../config/product';
import { ArrowRight, Menu, X, Sparkles } from 'lucide-react';
import { AdnStudioLogo } from './AdnStudioLogo';

interface HeaderProps {
  onOpenCheckout: () => void;
  isOfferExpired: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout, isOfferExpired }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#hero' },
    { label: 'La formation', href: '#presentation' },
    { label: 'Programme', href: '#programme' },
    { label: 'Ce que tu reçois', href: '#bonus' },
    { label: 'Témoignages', href: '#temoignages' },
    { label: 'FAQ', href: '#faq' },
  ];

  const currentPrice = isOfferExpired ? PRODUCT.regularPrice : PRODUCT.launchPrice;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090a0f]/90 backdrop-blur-md border-b border-neutral-800/80 shadow-lg shadow-black/20'
          : 'bg-[#090a0f]/60 backdrop-blur-sm border-b border-neutral-800/40'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Zone 1: Official Brand Logo & Wordmark */}
        <a href="#hero" className="flex items-center group">
          <AdnStudioLogo variant="compact" showSlogan={true} className="transition-transform group-hover:scale-[1.02]" />
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors relative py-1 text-sm tracking-normal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCheckout}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md shadow-violet-600/25 hover:shadow-violet-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Obtenir ma formation</span>
            <span className="text-white/80 font-normal">·</span>
            <span className="font-bold">{currentPrice.toLocaleString('fr-FR')} FCFA</span>
          </button>

          {/* Mobile CTA compact */}
          <button
            onClick={onOpenCheckout}
            className="sm:hidden px-3.5 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-semibold shadow-sm shadow-violet-600/30 whitespace-nowrap active:scale-95 transition-transform"
          >
            Obtenir · {currentPrice.toLocaleString('fr-FR')} F
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800/60 focus:outline-none"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1017] border-b border-neutral-800 px-5 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-neutral-300 hover:text-purple-400 py-1.5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-neutral-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheckout();
              }}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold text-center flex items-center justify-center gap-2"
            >
              <span>Accéder à la formation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
