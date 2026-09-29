import React from 'react';
import { ArrowRight, ShieldCheck, Smartphone, Zap } from 'lucide-react';
import { PRODUCT } from '../config/product';

interface FinalCTAProps {
  onOpenCheckout: () => void;
  isOfferExpired: boolean;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenCheckout, isOfferExpired }) => {
  const currentPrice = isOfferExpired ? PRODUCT.regularPrice : PRODUCT.launchPrice;
  const regularPrice = PRODUCT.regularPrice;

  return (
    <section className="py-20 sm:py-28 bg-[#0c0d16] relative overflow-hidden border-t border-neutral-800/80">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-violet-600/20 to-blue-600/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative text-center">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 font-display">
          Ton prochain niveau commence par une compétence.
        </h2>
        
        <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Apprends à utiliser l'IA. Crée quelque chose d'utile. Puis apprends à le vendre.
        </p>

        {/* Price Tag */}
        <div className="inline-flex items-baseline gap-3 p-3 px-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 mb-8 backdrop-blur-sm shadow-inner">
          {!isOfferExpired && (
            <span className="text-lg sm:text-xl text-neutral-500 line-through font-semibold">
              {regularPrice.toLocaleString('fr-FR')} FCFA
            </span>
          )}
          <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            {currentPrice.toLocaleString('fr-FR')} <span className="text-purple-400 font-bold text-2xl">FCFA</span>
          </span>
          {!isOfferExpired && (
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded">
              -50%
            </span>
          )}
        </div>

        {/* Large Action Button */}
        <div>
          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:via-indigo-500 hover:to-blue-500 text-white text-lg sm:text-xl font-bold tracking-wide shadow-2xl shadow-violet-600/40 hover:shadow-violet-600/60 hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>🚀 Obtenir ma formation</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          </button>

          {/* Trust points */}
          <div className="text-xs sm:text-sm text-neutral-400 flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Paiement sécurisé
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Zap className="w-4 h-4 text-amber-400" /> Formation numérique
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Smartphone className="w-4 h-4 text-blue-400" /> Accès depuis ton smartphone
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
