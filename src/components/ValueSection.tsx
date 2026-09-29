import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Tag } from 'lucide-react';
import { PRODUCT } from '../config/product';

interface ValueSectionProps {
  onOpenCheckout: () => void;
  isOfferExpired: boolean;
}

export const ValueSection: React.FC<ValueSectionProps> = ({ onOpenCheckout, isOfferExpired }) => {
  const currentPrice = isOfferExpired ? PRODUCT.regularPrice : PRODUCT.launchPrice;
  const totalValue = 20000;
  const savings = totalValue - currentPrice;

  const valueItems = [
    { label: "Formation complète en 5 modules PDF interactifs", amount: 10000 },
    { label: "Bibliothèque de Prompts ChatGPT + Outils testés", amount: 5000 },
    { label: "Calendrier éditorial & Plan de contenu 30 jours", amount: 3000 },
    { label: "Scripts & Messages de vente WhatsApp prêts à l'emploi", amount: 2000 },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0a0b12] relative overflow-hidden border-y border-neutral-800/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-violet-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <div className="rounded-3xl bg-[#0f111a] border border-violet-500/30 p-6 sm:p-10 md:p-12 shadow-2xl shadow-purple-950/40 text-center">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/80 border border-violet-500/40 text-violet-300 text-xs font-semibold mb-4">
            <Tag className="w-3.5 h-3.5 text-violet-400" />
            <span>Récapitulatif de Valeur</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2 font-display">
            Une valeur totale de 20 000 FCFA
          </h2>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-8">
            Si tu devais acquérir chacune de ces ressources séparément ou les concevoir toi-même, voici ce que cela représenterait :
          </p>

          {/* Breakdown List */}
          <div className="max-w-lg mx-auto space-y-3 mb-8 text-left">
            {valueItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/80 border border-neutral-800/80 text-xs sm:text-sm text-neutral-300"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="font-medium">{item.label}</span>
                </div>
                <span className="font-bold text-neutral-200 tabular-nums whitespace-nowrap ml-3">
                  {item.amount.toLocaleString('fr-FR')} FCFA
                </span>
              </div>
            ))}
          </div>

          {/* Large Price Highlight */}
          <div className="p-6 rounded-2xl bg-neutral-950/90 border border-violet-500/40 max-w-md mx-auto mb-8 shadow-inner">
            <div className="text-neutral-500 text-base sm:text-lg line-through font-semibold mb-1">
              20 000 FCFA
            </div>
            <div className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Aujourd'hui : <span className="text-purple-400">{currentPrice.toLocaleString('fr-FR')}</span> <span className="text-xl sm:text-2xl text-white font-bold">FCFA</span>
            </div>
            
            {!isOfferExpired && (
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-bold">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Tu économises {savings.toLocaleString('fr-FR')} FCFA</span>
              </div>
            )}
          </div>

          {/* CTA */}
          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:via-indigo-500 hover:to-blue-500 text-white text-base sm:text-lg font-bold tracking-wide shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>🚀 Je veux accéder à la formation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-[11px] text-neutral-400 mt-3">
            Paiement unique • Accès immédiat et illimité • Zéro abonnement caché
          </p>

        </div>
      </div>
    </section>
  );
};
