import React, { useState, useEffect } from 'react';
import { PRODUCT } from '../config/product';
import { ArrowRight, Sparkles } from 'lucide-react';

interface StickyMobileCTAProps {
  onOpenCheckout: () => void;
  isOfferExpired: boolean;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({
  onOpenCheckout,
  isOfferExpired,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Afficher uniquement après avoir dépassé la première partie du Hero (> 280px)
      setIsVisible(window.scrollY > 280);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentPrice = isOfferExpired ? PRODUCT.regularPrice : PRODUCT.launchPrice;

  if (!isVisible) return null;

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0d0e17]/95 backdrop-blur-md border-t border-neutral-800 p-2.5 px-4 shadow-2xl shadow-black">
      <div className="flex items-center justify-between gap-3">
        {/* Price & info */}
        <div className="flex flex-col min-w-0">
          <span className="text-[11px] font-bold text-neutral-300 truncate font-display">
            Formation IA Complète
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm font-extrabold text-white">
              {currentPrice.toLocaleString('fr-FR')} <span className="text-[10px] text-purple-400">FCFA</span>
            </span>
            {!isOfferExpired && (
              <span className="text-[9px] text-emerald-400 font-bold bg-emerald-950/70 px-1 py-0.2 rounded">
                -50%
              </span>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onOpenCheckout}
          className="flex-shrink-0 px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white text-xs font-bold shadow-md shadow-violet-600/30 flex items-center gap-1.5 active:scale-95 transition-transform"
        >
          <span>Obtenir ma formation</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
