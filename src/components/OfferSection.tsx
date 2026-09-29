import React from 'react';
import { PRODUCT, REMAINING_SLOTS, TOTAL_SLOTS } from '../config/product';
import { CountdownResult } from '../hooks/useCountdown';
import { Flame, Clock, Users, ArrowRight, AlertTriangle, Check } from 'lucide-react';

interface OfferSectionProps {
  onOpenCheckout: () => void;
  countdown: CountdownResult;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onOpenCheckout, countdown }) => {
  const isExpired = countdown.isExpired;
  const currentPrice = isExpired ? PRODUCT.regularPrice : PRODUCT.launchPrice;
  const regularPrice = PRODUCT.regularPrice;

  // Percentage of slots taken
  const percentageClaimed = Math.round(((TOTAL_SLOTS - REMAINING_SLOTS) / TOTAL_SLOTS) * 100);

  return (
    <section className="py-16 sm:py-24 bg-[#090a0f] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-violet-600/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <div
          className={`rounded-3xl border p-6 sm:p-10 md:p-12 text-center transition-all ${
            isExpired
              ? 'bg-[#101118] border-neutral-800'
              : 'bg-gradient-to-b from-[#131524] to-[#0c0d15] border-violet-500/40 shadow-2xl shadow-purple-950/40'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/80 border border-violet-500/40 text-violet-300 text-xs font-bold mb-4">
            <Flame className="w-4 h-4 text-violet-400 fill-violet-400" />
            <span>{isExpired ? 'OFFRE RÉGULIÈRE' : '🔥 OFFRE DE LANCEMENT'}</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 font-display">
            {isExpired ? (
              <span>Accès Formation Complète</span>
            ) : (
              <span>
                {PRODUCT.launchPrice.toLocaleString('fr-FR')} FCFA{' '}
                <span className="text-neutral-500 font-semibold text-xl sm:text-2xl line-through">
                  au lieu de {regularPrice.toLocaleString('fr-FR')} FCFA
                </span>
              </span>
            )}
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto mb-6">
            {isExpired
              ? "L'offre de lancement initiale est désormais terminée. Tu peux toujours accéder immédiatement à la formation au tarif normal."
              : `Offre réservée aux ${TOTAL_SLOTS} premiers acheteurs.`}
          </p>

          {/* Real-time Countdown Timer or Expired State */}
          {!isExpired ? (
            <div className="mb-8">
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
                {/* Days */}
                <div className="p-3 sm:p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 min-w-[65px] sm:min-w-[80px]">
                  <span className="text-xl sm:text-3xl font-extrabold text-white font-mono block tabular-nums">
                    {String(countdown.days).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs text-neutral-400 uppercase font-medium">Jours</span>
                </div>

                <span className="text-xl sm:text-2xl font-bold text-neutral-600">:</span>

                {/* Hours */}
                <div className="p-3 sm:p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 min-w-[65px] sm:min-w-[80px]">
                  <span className="text-xl sm:text-3xl font-extrabold text-white font-mono block tabular-nums">
                    {String(countdown.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs text-neutral-400 uppercase font-medium">Heures</span>
                </div>

                <span className="text-xl sm:text-2xl font-bold text-neutral-600">:</span>

                {/* Minutes */}
                <div className="p-3 sm:p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 min-w-[65px] sm:min-w-[80px]">
                  <span className="text-xl sm:text-3xl font-extrabold text-white font-mono block tabular-nums">
                    {String(countdown.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs text-neutral-400 uppercase font-medium">Minutes</span>
                </div>

                <span className="text-xl sm:text-2xl font-bold text-neutral-600">:</span>

                {/* Seconds */}
                <div className="p-3 sm:p-4 rounded-xl bg-neutral-900/90 border border-violet-500/40 min-w-[65px] sm:min-w-[80px] shadow-sm shadow-purple-900/40">
                  <span className="text-xl sm:text-3xl font-extrabold text-purple-400 font-mono block tabular-nums">
                    {String(countdown.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs text-neutral-400 uppercase font-medium">Secondes</span>
                </div>
              </div>

              {/* Slots Counter */}
              <div className="max-w-md mx-auto p-4 rounded-xl bg-neutral-900/80 border border-neutral-800/90">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
                  <span className="flex items-center gap-1.5 text-neutral-300">
                    <Users className="w-4 h-4 text-violet-400" />
                    Places restantes :
                  </span>
                  <span className="text-white font-mono tabular-nums">
                    <strong className="text-purple-400">{REMAINING_SLOTS}</strong> / {TOTAL_SLOTS}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2.5 bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-cyan-400 rounded-full transition-all duration-500"
                    style={{ width: `${percentageClaimed}%` }}
                  />
                </div>

                <p className="text-[11px] text-neutral-400 mt-2 text-center">
                  Le prix passera à {regularPrice.toLocaleString('fr-FR')} FCFA lorsque l'offre de lancement sera terminée.
                </p>
              </div>
            </div>
          ) : (
            <div className="max-w-md mx-auto p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 text-center mb-8">
              <span className="inline-flex items-center gap-1.5 text-neutral-400 text-sm font-semibold mb-1">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                Offre de lancement terminée
              </span>
              <p className="text-xs text-neutral-500">
                Le tarif régulier de {regularPrice.toLocaleString('fr-FR')} FCFA est actuellement en vigueur.
              </p>
            </div>
          )}

          {/* CTA */}
          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:via-indigo-500 hover:to-blue-500 text-white text-base sm:text-lg font-bold tracking-wide shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>
              {isExpired
                ? `Obtenir la formation — ${currentPrice.toLocaleString('fr-FR')} FCFA`
                : `Profiter de l'offre à ${currentPrice.toLocaleString('fr-FR')} FCFA`}
            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-[11px] text-neutral-400 mt-3">
            Paiement 100% sécurisé via Mobile Money & Carte bancaire
          </p>

        </div>
      </div>
    </section>
  );
};
